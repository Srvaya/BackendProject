// Mentors.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mentors() {
  const navigate = useNavigate();
  
  const mentors = [
    { 
      name: 'Alice Johnson', 
      expertise: 'Software Engineering', 
      details: 'Alice has 10 years of experience in software engineering, specializing in full-stack development.' 
    },
    { 
      name: 'John Doe', 
      expertise: 'Data Science', 
      details: 'John is a seasoned data scientist with expertise in machine learning and big data analytics.' 
    },
    { 
      name: 'Jane Smith', 
      expertise: 'Product Management', 
      details: 'Jane is a product manager with a focus on user experience and agile methodologies.' 
    },
  ];

  // Navigate back to the home page
  const handleBackClick = () => {
    navigate('/');
  };

  // Display mentor details in an alert (can be changed to a modal or separate page)
  const handleViewDetails = (mentor) => {
    alert(`Details about ${mentor.name}: ${mentor.details}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Back to Home
        </button>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mentors</h2>
        
        {/* Mentor List */}
        <ul className="space-y-4">
          {mentors.map((mentor, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
              <p className="text-gray-600">Expertise: {mentor.expertise}</p>
              
              {/* View Details Button */}
              <button
                onClick={() => handleViewDetails(mentor)}
                className="mt-2 px-3 py-1 text-sm text-indigo-600 rounded-md hover:text-indigo-800"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
