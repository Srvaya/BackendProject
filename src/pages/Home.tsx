import { ArrowRight, BookOpen, Calendar, Shield, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: User,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with years of experience',
      link: '/mentors' // Add link property for navigation
    },
    {
      icon: BookOpen,
      title: 'Structured Learning',
      description: 'Follow carefully crafted learning paths to achieve your goals',
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      description: 'Book sessions that fit your timeline and availability',
    },
    {
      icon: Shield,
      title: 'Guaranteed Results',
      description: 'Track your progress and achieve measurable outcomes',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mentorship Program
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Connect with mentors 
            </p>
            <div className="space-x-4">
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-30 hover:bg-opacity-40 md:text-lg"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Career Mentor?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  to={feature.link || '#'}
                  key={index}
                  className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
