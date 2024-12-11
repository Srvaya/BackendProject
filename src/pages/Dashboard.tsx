import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Active Courses', value: 3 },
    { label: 'Hours Learned', value: 24 },
    { label: 'Goals Completed', value: 8 },
    { label: 'Certificates', value: 2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">{stat.label}</h2>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
