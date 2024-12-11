import { CheckCircle, Circle } from 'lucide-react';
import DashboardSidebar from '../components/DashboardSidebar';

export default function Progress() {
  const courses = [
    {
      name: 'Python Programming',
      progress: 75,
      modules: [
        { name: 'Introduction to Python', completed: true },
        { name: 'Data Types and Variables', completed: true },
        { name: 'Control Flow', completed: true },
        { name: 'Functions', completed: false },
      ],
    },
    {
      name: 'JavaScript Development',
      progress: 40,
      modules: [
        { name: 'JavaScript Basics', completed: true },
        { name: 'DOM Manipulation', completed: true },
        { name: 'ES6+ Features', completed: false },
        { name: 'Async Programming', completed: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Your Progress</h1>
            <div className="mt-6 space-y-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium text-gray-900">{course.name}</h2>
                      <span className="text-sm font-medium text-indigo-600">
                        {course.progress}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="space-y-3">
                      {course.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center">
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-300" />
                          )}
                          <span className="ml-3 text-sm text-gray-600">{module.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}