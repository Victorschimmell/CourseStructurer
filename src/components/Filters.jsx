// src/components/Filters.jsx
import React from 'react'

const Filters = ({ activeFilter, setActiveFilter, setCurrentPage }) => {
  const degreeTypes = ['', 'Bachelor', 'Master'] // PhD removed
  return (
    <div className="filters">
      <label htmlFor="degree-filter">Filter by Degree:</label>
      <select
        id="degree-filter"
        value={activeFilter}
        onChange={(e) => {
          setActiveFilter(e.target.value)
          setCurrentPage(1)
        }}
      >
        {degreeTypes.map((deg, idx) => (
          <option key={idx} value={deg}>
            {deg === '' ? 'All' : deg}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filters
