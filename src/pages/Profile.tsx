import { Camera, Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate learner focused on web development and UI/UX design.',
    interests: ['Web Development', 'UI/UX Design', 'Mobile Development'],
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardSidebar />
      
      <div className="pl-64">
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg">
              {/* Cover/Profile Section */}
              <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-lg"></div>
              <div className="px-4 sm:px-6 lg:px-8 pb-8">
                <div className="relative -mt-16 flex items-end space-x-5">
                  <div className="flex">
                    <div className="relative h-32 w-32 rounded-full ring-4 ring-white bg-white">
                      <img
                        className="h-32 w-32 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <button
                        type="button"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center ring-2 ring-white"
                      >
                        <Camera className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:space-x-5">
                    <div className="mt-4 text-center sm:mt-0 sm:text-left">
                      <p className="text-xl font-bold text-gray-900">{profile.name}</p>
                      <p className="text-sm font-medium text-gray-600">Student</p>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-center sm:mt-0">
                    <button className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Edit Profile
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
                    <dl className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <dt className="flex items-center text-sm font-medium text-gray-500">
                          <User className="h-4 w-4 mr-2" />
                          Full Name
                        </dt>
                        <dd className="ml-4 text-sm text-gray-900">{profile.name}</dd>
                      </div>
                      <div className="flex items-center">
                        <dt className="flex items-center text-sm font-medium text-gray-500">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </dt>
                        <dd className="ml-4 text-sm text-gray-900">{profile.email}</dd>
                      </div>
                      <div className="flex items-center">
                        <dt className="flex items-center text-sm font-medium text-gray-500">
                          <Phone className="h-4 w-4 mr-2" />
                          Phone
                        </dt>
                        <dd className="ml-4 text-sm text-gray-900">{profile.phone}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900">About</h3>
                    <div className="mt-4 text-sm text-gray-600">{profile.bio}</div>

                    <h3 className="mt-8 text-lg font-medium text-gray-900">Interests</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}