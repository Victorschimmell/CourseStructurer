// src/components/Filters.jsx
import React, { useState } from 'react';

const Filters = ({
  activeFilter,
  setActiveFilter,
  activeDepartments,
  setActiveDepartments,
  setCurrentPage,
  departmentNames,
}) => {
  const degreeTypes = ['', 'Bachelor', 'Master'];
  const departmentEntries = Object.entries(departmentNames);

  const toggleDepartment = (deptCode) => {
    setActiveDepartments((prev) =>
      prev.includes(deptCode)
        ? prev.filter((code) => code !== deptCode)
        : [...prev, deptCode]
    );
    setCurrentPage(1);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="filters">
      {/* Filter by Degree */}
      <label htmlFor="degree-filter">Filter by Degree:</label>
      <select
        id="degree-filter"
        value={activeFilter}
        onChange={(e) => {
          setActiveFilter(e.target.value);
          setCurrentPage(1);
        }}
      >
        {degreeTypes.map((deg, idx) => (
          <option key={idx} value={deg}>
            {deg === '' ? 'All' : deg}
          </option>
        ))}
      </select>

      {/* Dropdown Button */}
      <div className="dropdown-container">
        <button
          className="dropdown-button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          Select Departments
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {departmentEntries.map(([code, name]) => (
              <div key={code} className="dropdown-item">
                <label>
                  <input
                    type="checkbox"
                    value={code}
                    checked={activeDepartments.includes(code)}
                    onChange={() => toggleDepartment(code)}
                    style={{ marginRight: '10px' }}
                  />
                  {name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
