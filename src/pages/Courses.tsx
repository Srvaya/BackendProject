import { useState } from 'react';
import { BookOpen, Clock, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Courses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    {
      id: 1,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Learn the fundamentals of AI and ML with practical projects',
      duration: '12 weeks',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'Python Programming',
      description: 'Master Python programming from basics to advanced concepts',
      duration: '8 weeks',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'JavaScript Development',
      description: 'Build modern web applications with JavaScript',
      duration: '10 weeks',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Intermediate'
    },
    {
      id: 4,
      title: 'Java Programming',
      description: 'Learn Java programming and object-oriented principles',
      duration: '10 weeks',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Beginner'
    }
  ];

  const handleEnroll = (id) => {
    setEnrolledCourses((prev) => [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Available Courses
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Choose from our wide range of courses taught by industry experts
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600">
                        {course.level}
                      </p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                      </div>
                    </div>
                    <div className="block mt-2">
                      <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                      <p className="mt-3 text-base text-gray-500">{course.description}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        {course.duration}
                      </div>
                      <button
                        className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={() => handleEnroll(course.id)}
                        disabled={enrolledCourses.includes(course.id)}
                      >
                        <BookOpen className="h-4 w-4 mr-1.5" />
                        {enrolledCourses.includes(course.id) ? 'Enrolled' : 'Enroll Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
