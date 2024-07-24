// src/components/CourseList.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CourseList.css'; // Import component-specific stylesheet

// Example placeholder URLs
const defaultLogoUrl = 'https://via.placeholder.com/200x150?text=Image+Not+Available';

const CourseList = () => {
  const courses = [
    { 
      id: 1, 
      title: 'Introduction to React',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      description: 'Learn the basics of React.js and its ecosystem.',
    },
    { 
      id: 2, 
      title: 'Java Programming',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1024px-Java_programming_language_logo.svg.png',
      description: 'Master the Java programming language.',
    },
    { 
      id: 3, 
      title: 'Python Programming',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
      description: 'Learn Python programming language for beginners to advanced levels.',
    },
    { 
      id: 4, 
      title: 'HTML/CSS Fundamentals',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png',
      description: 'Essential skills for creating web pages with HTML and CSS.',
    },
    { 
      id: 5, 
      title: 'Database Management with SQL',
      logo:'https://th.bing.com/th?id=OIP.Ppjp4ggi4QqjaD5-i4jkfwAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Placeholder or default image for missing logo
      description: 'Understand relational databases and SQL query language.',
    },
    { 
      id: 6, 
      title: 'Web Development Bootcamp',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png',
      description: 'Comprehensive training on full-stack web development.',
    },
    { 
      id: 7, 
      title: 'Placement Training Course',
      logo:'https://th.bing.com/th?id=OIP.H174uM6gwEECD2s0UOlUwAHaFe&w=290&h=215&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Placeholder or default image for missing logo
      description: 'Prepare for job interviews, resume building, and soft skills.',
    },
  ];

  return (
    <div className="course-list container">
      <h1 className="text-center mb-4">E-Learning Courses</h1>
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                {course.logo !== defaultLogoUrl ? (
                  <div className="card-logo">
                    <img 
                      src={course.logo} 
                      alt={course.title} 
                      className="course-logo-img" 
                      onError={(e) => { e.target.src = defaultLogoUrl }} // Handle image loading error
                    />
                  </div>
                ) : (
                  <div className="card-logo-placeholder">
                    <p>No logo available</p>
                  </div>
                )}
                <p className="card-text">{course.description}</p>
                <Link to={`/course/${course.id}`} className="btn btn-primary custom-btn-sm">Explore Course</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
