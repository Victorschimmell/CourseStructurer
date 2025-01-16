// src/courseData.js
const courses = [
  // Group: Restricted Electives (min. 2) — 7.5 ECTS courses
  {
    id: 'course-AA',
    title: 'Advanced Algorithms and Data Structures (7.5 ECTS)',
    details: 'Block: 2, Schedule: C',
    ects: 7.5,
    block: '2',
    group: 'Restricted Electives (min. 2)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-AC',
    title: 'Advanced Computer Systems (7.5 ECTS)',
    details: 'Block: 2, Schedule: A',
    ects: 7.5,
    block: '2',
    group: 'Restricted Electives (min. 2)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-AP',
    title: 'Advanced Programming (7.5 ECTS)',
    details: 'Block: 1, Schedule: A',
    ects: 7.5,
    block: '1',
    group: 'Restricted Electives (min. 2)',
    location: null,
    spanningBlock: null,
  },

  // Group: Restricted Electives (min. 1) — all 7.5 ECTS courses
  {
    id: 'course-ATDL',
    title: 'Advanced Topics in Deep Learning (7.5 ECTS)',
    details: 'Block: 1, Schedule: A',
    ects: 7.5,
    block: '1',
    group: 'Restricted Electives (min. 1)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-DL',
    title: 'Deep Learning (7.5 ECTS)',
    details: 'Block: 2, Schedule: C',
    ects: 7.5,
    block: '2',
    group: 'Restricted Electives (min. 1)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-MLA',
    title: 'Machine Learning A (7.5 ECTS)',
    details: 'Block: 1, Schedule: B',
    ects: 7.5,
    block: '1',
    group: 'Restricted Electives (min. 1)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-MLB',
    title: 'Machine Learning B (7.5 ECTS)',
    details: 'Block: 4, Schedule: C',
    ects: 7.5,
    block: '4',
    group: 'Restricted Electives (min. 1)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-NLP',
    title: 'Natural Language Processing (7.5 ECTS)',
    details: 'Block: 1, Schedule: B',
    ects: 7.5,
    block: '1',
    group: 'Restricted Electives (min. 1)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-ORL',
    title: 'Online and Reinforcement Learning (7.5 ECTS)',
    details: 'Block: 3, Schedule: A',
    ects: 7.5,
    block: '3',
    group: 'Restricted Electives (min. 1)',
    location: null,
    spanningBlock: null,
  },

  // Group: Further Restricted Electives (37.5 ECTS needed)
  // Here we assume these courses are 15 ECTS courses (or similar) that should span 2 blocks.
  {
    id: 'course-ATHCC',
    title: 'Advanced Topics in Human-Centered Computing (7.5 ECTS)',
    details: 'Block: 3, Schedule: C',
    ects: 7.5, // remains 7.5 (non-spanning) if it is 7.5 ECTS;
    block: '3',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-AAp',
    title: 'Approximation Algorithms (7.5 ECTS)',
    details: 'Block: 4, Schedule: A',
    ects: 7.5,
    block: '4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-BDS',
    title: 'Big Data Systems (7.5 ECTS)',
    details: 'Block: 2, Schedule: C',
    ects: 7.5,
    block: '2',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-CC',
    title: 'Computability and Complexity (7.5 ECTS)',
    details: 'Block: 3, Schedule: A',
    ects: 7.5,
    block: '3',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-CG',
    title: 'Computational Geometry (7.5 ECTS)',
    details: 'Block: 3, Schedule: B',
    ects: 7.5,
    block: '3',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-CMiS',
    title: 'Computational Methods in Simulation (7.5 ECTS)',
    details: 'Block: 4, Schedule: C',
    ects: 7.5,
    block: '4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-CGD',
    title: 'Computer Game Development Project (30 ECTS)',
    details: 'Spans Block: 1 & 2, Full Time',
    ects: 30,
    block: '1-2',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-MIA',
    title: 'Medical Image Analysis (7.5 ECTS)',
    details: 'Block: 1, Schedule: A',
    ects: 7.5,
    block: '1',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-MC',
    title: 'Mobile Computing (7.5 ECTS)',
    details: 'Block: 4, Schedule: C',
    ects: 7.5,
    block: '4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-NO',
    title: 'Numerical Optimization (7.5 ECTS)',
    details: 'Block: 3, Schedule: C',
    ects: 7.5,
    block: '3',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-PCS',
    title: 'Proactive Computer Security (7.5 ECTS)',
    details: 'Block: 4, Schedule: A',
    ects: 7.5,
    block: '4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-PAT',
    title: 'Program Analysis and Transformation (7.5 ECTS)',
    details: 'Block: 4, Schedule: C',
    ects: 7.5,
    block: '4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-PMPH',
    title: 'Programming Massively Parallel Hardware (7.5 ECTS)',
    details: 'Block: 1, Schedule: C',
    ects: 7.5,
    block: '1',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-RA',
    title: 'Randomized Algorithms (7.5 ECTS)',
    details: 'Block: 4, Schedule: B',
    ects: 7.5,
    block: '4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-SE',
    title: 'Search Engines (7.5 ECTS)',
    details: 'Block: 4, Schedule: B',
    ects: 7.5,
    block: '4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-ST',
    title: 'Semantics and Types (7.5 ECTS)',
    details: 'Block: 3, Schedule: C',
    ects: 7.5,
    block: '3',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-SIP',
    title: 'Signal and Image Processing (7.5 ECTS)',
    details: 'Block: 3, Schedule: A',
    ects: 7.5,
    block: '3',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-SEA',
    title: 'Software Engineering and Architecture (15 ECTS)',
    details: 'Spans Block: 3 & 4, Schedule: A',
    ects: 15,
    block: '3-4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-SSec',
    title: 'Software Security (7.5 ECTS)',
    details: 'Block: 1, Schedule: B',
    ects: 7.5,
    block: '1',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
  {
    id: 'course-UITech',
    title: 'User Interface Technology (7.5 ECTS)',
    details: 'Block: 4, Schedule: A',
    ects: 7.5,
    block: '4',
    group: 'Further Restricted Electives (37.5 ECTS needed)',
    location: null,
    spanningBlock: null,
  },
];

export default courses;
