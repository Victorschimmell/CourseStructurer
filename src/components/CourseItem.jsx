import React from 'react';
import { useDrag } from 'react-dnd';

// Mapping for block string values to integers
const blockMapping = {
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
};

// Helper to extract a displayable string from an array field and handle block conversion.
const extractDisplayValue = (arr, isBlock = false) => {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  const item = arr[0];
  if (typeof item === 'string') {
    return isBlock ? blockMapping[item] || item : item; // Convert block if needed
  }
  if (typeof item === 'object' && item !== null) {
    if (item.type) return isBlock ? blockMapping[item.type] || item.type : String(item.type);
    if (item.Other) return String(item.Other);
    if (item.name) return String(item.name);
    return JSON.stringify(item); // Fallback for unexpected objects
  }
  return String(item); // Fallback for anything else
};

const CourseItem = ({ id, title, block, schedule, degree, ects, inBlock, additionalClass, onRemove, statistics }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'course',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [id]);

  // Extract displayable values using our helper.
  const displayedBlock = extractDisplayValue(block, true); // Pass true to enable block conversion
  const displayedSchedule = extractDisplayValue(schedule);
  const displayedDegree = extractDisplayValue(degree);
  const meanGrade = statistics?.mean ? statistics.mean.toFixed(2) : 'N/A'; // Handle mean grade display

  return (
    <div
      ref={drag}
      className={`draggable-item ${inBlock ? 'in-block' : ''} ${additionalClass || ''}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        margin: '10px 0',
        position: 'relative', // Needed for positioning the Remove button
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {inBlock && (
        <button
          onClick={() => onRemove && onRemove(id)}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: '#ff4d4f',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            cursor: 'pointer',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          title="Remove"
        >
          ×
        </button>
      )}
      <div className="course-title" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
        {title}
      </div>
      <div className="course-ects" style={{ fontSize: '0.85em', fontWeight: 'bold', marginBottom: '5px' }}>
        {ects} ECTS
      </div>
      {inBlock ? (
        <div className="course-attributes" style={{ fontSize: '0.85em', marginTop: '4px' }}>
          <div>Block: {displayedBlock} ({displayedSchedule})</div>
          <div>Degree: {displayedDegree}</div>
          <div>Mean Grade: {meanGrade}</div>
        </div>
      ) : (
        <div className="course-attributes" style={{ fontSize: '0.8em', color: '#666' }}>
          <div>Block: {displayedBlock}, ({displayedSchedule})</div>
          <div>Degree: {displayedDegree}</div>
          <div>Mean Grade: {meanGrade}</div>
        </div>
      )}
    </div>
  );
};

export default CourseItem;
