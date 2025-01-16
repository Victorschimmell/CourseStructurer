// src/App.jsx
import React, { useState, useEffect } from 'react';
import PlanStructure from './components/PlanStructure';
import Courses from './components/Courses';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://kucourses.dk/api/find-course-overviews', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });
        const data = await response.json();
        const courses = data.results || data.courses || [];
        setCourses(courses.map(course => ({ ...course, location: null, spanningBlock: null })));
      } catch (error) {
        setError('Error fetching courses.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course => {
    const title = course.title || '';
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!activeFilter || course.degree[0]?.type === activeFilter) &&
      course.location === null
    );
  });

  const currentCourses = filteredCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const paginate = page => setCurrentPage(page);

  const getBlockCapacity = (blockId) => {
    return courses.reduce((total, course) => {
      let contribution = 0;
      if (course.location === blockId) {
        contribution += course.ects >= 15 ? course.ects / 2 : course.ects;
      }
      if (course.spanningBlock === blockId) {
        contribution += course.ects / 2;
      }
      return total + contribution;
    }, 0);
  };

  const handleDrop = (courseId, targetBlockId) => {
    const parts = targetBlockId.split('-block');
    if (parts.length !== 2) return;
    const blockNum = parseInt(parts[1]);
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    const isSpanning = course.ects >= 15;

    // Restrict placement in Year 2, Block 2 for courses with 15 ECTS or higher
    if (isSpanning && targetBlockId === 'year2-block2') {
      alert("15 ECTS or higher courses cannot be placed in Year 2, Block 2.");
      return;
    }

    if (isSpanning && blockNum === 4) {
      alert("A spanning course cannot be placed in block 4.");
      return;
    }

    if (isSpanning) {
      const nextBlockId = `${parts[0]}-block${blockNum + 1}`;
      const capacityTarget = getBlockCapacity(targetBlockId);
      const capacityNext = getBlockCapacity(nextBlockId);
      if (capacityTarget + (course.ects / 2) > 15 || capacityNext + (course.ects / 2) > 15) {
        alert("Not enough capacity in one of the blocks for this spanning course.");
        return;
      }
      setCourses(prevCourses =>
        prevCourses.map(c =>
          c.id === courseId ? { ...c, location: targetBlockId, spanningBlock: nextBlockId } : c
        )
      );
    } else {
      const capacityTarget = getBlockCapacity(targetBlockId);
      if (capacityTarget + course.ects > 15) {
        alert("Not enough capacity in this block for the course.");
        return;
      }
      setCourses(prevCourses =>
        prevCourses.map(c =>
          c.id === courseId ? { ...c, location: targetBlockId, spanningBlock: null } : c
        )
      );
    }
  };

  const handleRemove = (courseId) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId ? { ...course, location: null, spanningBlock: null } : course
      )
    );
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>KU Programme Structurer</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {loading && <p>Loading courses...</p>}
        {error && <p className="error">{error}</p>}
        <div className="container">
          <PlanStructure courses={courses} onDropCourse={handleDrop} onRemoveCourse={handleRemove} />
          <div className="courses-pane">
            <div className="courses-controls">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            </div>
            <Courses courses={currentCourses} />
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredCourses.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          KU Programme Structurer is an initiative by a student of University of Copenhagen to help students plan and organize
          their studies effectively. For inquiries, please <a href="#contact">contact us</a>.
        </p>
        <p>&copy; {new Date().getFullYear()} University of Copenhagen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;