import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EnrollmentPage.css'; // Import component-specific stylesheet

const EnrollmentPage = () => {
  let { courseId } = useParams();

  // State for handling enrollment completion
  const [enrollmentComplete, setEnrollmentComplete] = useState(false);

  // Example course data (replace with actual course data or API call)
  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React.js and its ecosystem.',
      price: '$49.99',
      duration: '4 weeks',
    },
    {
      id: 2,
      title: 'Java Programming',
      description: 'Master the Java programming language.',
      price: '$69.99',
      duration: '8 weeks',
    },
    {
      id: 3,
      title: 'Python Programming',
      description: 'Learn Python programming language for beginners to advanced levels.',
      price: '$59.99',
      duration: '6 weeks',
    },
    {
      id: 4,
      title: 'HTML/CSS Fundamentals',
      description: 'Essential skills for creating web pages with HTML and CSS.',
      price: '$39.99',
      duration: '3 weeks',
    },
    {
      id: 5,
      title: 'Database Management with SQL',
      description: 'Understand relational databases and SQL query language.',
      price: '$49.99',
      duration: '4 weeks',
    },
    {
      id: 6,
      title: 'Web Development Bootcamp',
      description: 'Comprehensive training on full-stack web development.',
      price: '$99.99',
      duration: '12 weeks',
    },
    {
      id: 7,
      title: 'Placement Training Course',
      description: 'Prepare for job interviews, resume building, and soft skills.',
      price: '$29.99',
      duration: '2 weeks',
    },
  ];

  // Find the course based on courseId from URL params
  const course = courses.find((course) => course.id === parseInt(courseId));

  // If course not found, handle error or display default course
  if (!course) {
    return (
      <div className="enrollment-page container">
        <h2>Course Enrollment</h2>
        <p>Course not found</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending credentials to user's email (for demonstration purposes)
    setTimeout(() => {
      setEnrollmentComplete(true);
    }, 2000); // Simulate a delay of 2 seconds
  };

  return (
    <div className="enrollment-page container">
      {enrollmentComplete ? (
        <div className="enrollment-complete">
          <h2>Enrollment Complete</h2>
          <p className="lead">Congratulations! You have successfully enrolled in the course:</p>
          <h3>{course.title}</h3>
          <p className="course-description">{course.description}</p>
          <p>An email with enrollment credentials will be sent to your registered email address shortly.</p>
        </div>
      ) : (
        <div className="enrollment-form">
          <h2>Enroll in {course.title}</h2>
          <p className="lead">{course.description}</p>
          <div className="details">
            <p><strong>Price:</strong> {course.price}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            {/* Add more details as needed */}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EnrollmentPage;
