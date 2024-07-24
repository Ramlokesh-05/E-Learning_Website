import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import EnrollmentPage from './components/EnrollmentPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/enroll/:courseId" element={<EnrollmentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
