// src/components/CourseGroup.jsx
import React from 'react'
import CourseItem from './CourseItem'

const CourseGroup = ({ groupName, courses }) => {
  return (
    <div className="course-group">
      <h3>{groupName}</h3>
      {courses.map(course => (
        <CourseItem key={course.id} {...course} inBlock={false} />
      ))}
    </div>
  )
}

export default CourseGroup
