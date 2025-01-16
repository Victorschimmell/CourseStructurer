// src/components/Courses.jsx
import React from 'react'
import CourseItem from './CourseItem'

const Courses = ({ courses }) => {
  return (
    <div className="courses">
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        courses.map(course => (
          <CourseItem key={course.id} {...course} inBlock={false} />
        ))
      )}
    </div>
  )
}

export default Courses
