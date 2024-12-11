import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import Schedule from './pages/Schedule';
import Signup from './pages/Signup';
import Mentors from './pages/Mentor'; // Import the Mentors component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/courses" element={<Courses />} />
          <Route path="/dashboard/schedule" element={<Schedule />} />
          <Route path="/dashboard/progress" element={<Progress />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/mentors" element={<Mentors />} /> {/* New route for Mentors page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
