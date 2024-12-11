import DashboardSidebar from '../components/DashboardSidebar';

export default function Schedule() {
  const schedule = [
    {
      day: 'Monday',
      sessions: [
        { time: '10:00 AM', course: 'Python Programming', mentor: 'David Wilson' },
        { time: '2:00 PM', course: 'JavaScript Development', mentor: 'Sarah Johnson' }
      ]
    },
    {
      day: 'Wednesday',
      sessions: [
        { time: '11:00 AM', course: 'AI & ML', mentor: 'Michael Brown' }
      ]
    },
    {
      day: 'Friday',
      sessions: [
        { time: '9:00 AM', course: 'Java Programming', mentor: 'Emily Davis' },
        { time: '3:00 PM', course: 'Python Programming', mentor: 'David Wilson' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Class Schedule</h1>
            <div className="mt-6">
              {schedule.map((day, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">{day.day}</h2>
                  <div className="space-y-4">
                    {day.sessions.map((session, sessionIndex) => (
                      <div key={sessionIndex} className="bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lg font-medium text-gray-900">{session.course}</p>
                            <p className="text-sm text-gray-500">with {session.mentor}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-indigo-600">{session.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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