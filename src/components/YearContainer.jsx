// src/components/YearContainer.jsx
import React from 'react'
import Block from './Block'

const YearContainer = ({ year, blocks, courses, onDropCourse, onRemoveCourse }) => {
  return (
    <div className="year-container">
      <h2>{year === 'year1' ? 'Year 1' : 'Year 2'}</h2>
      {blocks.map(block => (
        <Block
          key={block.id}
          id={block.id}
          title={block.title}
          thesis={block.thesis}
          // Pass courses that are placed in this block OR span into this block.
          courses={courses.filter(course => course.location === block.id || course.spanningBlock === block.id)}
          onDropCourse={onDropCourse}
          onRemoveCourse={onRemoveCourse}
        />
      ))}
    </div>
  )
}

export default YearContainer
