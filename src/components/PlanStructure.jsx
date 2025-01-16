// src/components/PlanStructure.jsx
import React from 'react'
import YearContainer from './YearContainer'

const PlanStructure = ({ courses, onDropCourse, onRemoveCourse }) => {
  return (
    <div className="plan-structure">
      {/* Year 1 */}
      <YearContainer
        year="year1"
        blocks={[
          { id: 'year1-block1', title: 'Block 1 (15 ECTS)' },
          { id: 'year1-block2', title: 'Block 2 (15 ECTS)' },
          { id: 'year1-block3', title: 'Block 3 (15 ECTS)' },
          { id: 'year1-block4', title: 'Block 4 (15 ECTS)' }
        ]}
        courses={courses}
        onDropCourse={onDropCourse}
        onRemoveCourse={onRemoveCourse}
      />
      {/* Year 2 */}
      <YearContainer
        year="year2"
        blocks={[
          { id: 'year2-block1', title: 'Block 1 (15 ECTS)' },
          { id: 'year2-block2', title: 'Block 2 (15 ECTS)' },
          { id: 'year2-block3-4', title: "Master's Thesis (30 ECTS)", thesis: true }
        ]}
        courses={courses}
        onDropCourse={onDropCourse}
        onRemoveCourse={onRemoveCourse}
      />
    </div>
  )
}

export default PlanStructure
