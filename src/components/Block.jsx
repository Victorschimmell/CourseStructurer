// src/components/Block.jsx
import React from 'react'
import { useDrop } from 'react-dnd'
import CourseItem from './CourseItem'

const Block = ({ id, title, thesis, courses, onDropCourse, onRemoveCourse }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'course',
    drop: (item) => {
      if (!thesis) {
        onDropCourse(item.id, id)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }), [id, thesis, onDropCourse])

  const isActive = isOver && canDrop

  return (
    <div ref={drop} className={`block ${thesis ? 'thesis' : ''} ${isActive ? 'active' : ''}`}>
      <h3>{title}</h3>
      {courses.map(course => (
        <CourseItem
          key={course.id}
          {...course}
          inBlock={true}
          onRemove={onRemoveCourse}
        />
      ))}
      {thesis && <p>Predefined, no courses can be added here.</p>}
    </div>
  )
}

export default Block
