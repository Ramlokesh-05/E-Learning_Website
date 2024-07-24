import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CourseDetail.css'; // Import component-specific stylesheet

const CourseDetail = () => {
  let { id } = useParams();

  // Example course data (replace with your actual data or API call)
  const courses = [
    { 
      id: 1, 
      title: 'Introduction to React',
      description: 'Learn the basics of React.js and its ecosystem.',
      logo: 'https://via.placeholder.com/200x100/FF5733/FFFFFF?text=React', // Example logo URL
      schedule: 'Every Monday and Wednesday at 6:00 PM',
      topics: [
        'Introduction to JSX and components',
        'State and lifecycle methods',
        'Handling events and forms',
        'React Router and state management',
      ],
    },
    { 
      id: 2, 
      title: 'JavaScript Basics',
      description: 'Fundamental concepts of JavaScript programming language.',
      logo: 'https://via.placeholder.com/200x100/33FF57/FFFFFF?text=JavaScript', // Example logo URL
      schedule: 'Tuesdays and Thursdays at 7:00 PM',
      topics: [
        'Variables, data types, and operators',
        'Control structures (if, for, while)',
        'Functions and scope',
        'DOM manipulation and event handling',
      ],
    },
    { 
      id: 3, 
      title: 'Python Programming',
      description: 'Learn Python programming language for beginners to advanced levels.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
      schedule: 'Mondays and Fridays at 5:30 PM',
      topics: [
        'Python syntax and basic data structures',
        'Object-oriented programming in Python',
        'File handling and exceptions',
        'Web scraping and data analysis with libraries',
      ],
    },
    { 
      id: 4, 
      title: 'HTML/CSS Fundamentals',
      description: 'Essential skills for creating web pages with HTML and CSS.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png',
      schedule: 'Weekends: Saturday and Sunday at 10:00 AM',
      topics: [
        'HTML tags, attributes, and semantic elements',
        'CSS selectors, properties, and box model',
        'Responsive design and CSS frameworks',
        'CSS animations and transitions',
      ],
    },
    { 
      id: 5, 
      title: 'Database Management with SQL',
      description: 'Understand relational databases and SQL query language.',
      logo: 'https://th.bing.com/th?id=OIP.Ppjp4ggi4QqjaD5-i4jkfwAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Placeholder or default image for missing logo
      schedule: 'Tuesdays and Thursdays at 6:30 PM',
      topics: [
        'Introduction to relational databases and SQL',
        'Querying databases using SELECT, INSERT, UPDATE, DELETE',
        'Database normalization and transactions',
        'Advanced SQL topics: joins, subqueries, triggers',
      ],
    },
    { 
      id: 6, 
      title: 'Web Development Bootcamp',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png',
      description: 'Comprehensive training on full-stack web development.',
      schedule: 'Monday to Friday at 9:00 AM',
      topics: [
        'HTML5, CSS3, and JavaScript fundamentals',
        'Frontend frameworks: React, Angular, Vue.js',
        'Backend development with Node.js and Express',
        'Database integration and RESTful APIs',
      ],
    },
    { 
      id: 7, 
      title: 'Placement Training Course',
      logo: 'https://th.bing.com/th?id=OIP.H174uM6gwEECD2s0UOlUwAHaFe&w=290&h=215&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Placeholder or default image for missing logo
      description: 'Prepare for job interviews, resume building, and soft skills.',
      schedule: 'Weekdays: Monday, Wednesday, and Friday at 4:00 PM',
      topics: [
        'Resume writing and interview preparation',
        'Soft skills: communication, teamwork, leadership',
        'Mock interviews and feedback sessions',
        'Job search strategies and networking tips',
      ],
    },
  ];

  // Find the course based on id from URL params
  const course = courses.find(course => course.id === parseInt(id));

  // If course not found, handle error or display default course
  if (!course) {
    return (
      <div className="course-detail container">
        <p>Course not found</p>
      </div>
    );
  }

  // Default placeholder URL for missing images
  const defaultLogoUrl = 'https://via.placeholder.com/200x100?text=Image+Not+Available';

  return (
    <div className="course-detail container">
      <div className="row">
        <div className="col-md-6">
          <h2>{course.title}</h2>
          <img 
            src={course.logo || defaultLogoUrl} 
            className="img-fluid course-detail-logo" 
            alt={course.title} 
          />
        </div>
        <div className="col-md-6">
          <p className="lead">{course.description}</p>
          <h4>Schedule:</h4>
          <p>{course.schedule}</p>
          <h4>Topics Covered:</h4>
          <ul>
            {course.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <a href={`/enroll/${course.id}`} className="btn btn-primary btn-sm">Enroll Now</a> {/* Small primary button */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

