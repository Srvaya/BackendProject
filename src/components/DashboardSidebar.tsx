import { BookOpen, Calendar, Home, Layout, LogOut, Settings, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function DashboardSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Overview', path: '/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/dashboard/courses' },
    { icon: Calendar, label: 'Schedule', path: '/dashboard/schedule' },
    { icon: Layout, label: 'Progress', path: '/dashboard/progress' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    // Navigate to home page
    navigate('/');
  };

  return (
    <div className="h-screen w-64 bg-white shadow-lg fixed left-0 top-0">
      <div className="flex items-center justify-center h-16 border-b">
        <Link to="/" className="flex items-center space-x-2">
          <User className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-800">Career Mentor</span>
        </Link>
      </div>

      <nav className="mt-8">
        <div className="px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-8 w-full px-4">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-600 hover:text-red-600 px-4 py-3 w-full"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}