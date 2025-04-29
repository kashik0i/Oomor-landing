import React from 'react';

export const DashboardHome: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%', icon: '👥' },
    { title: 'Total Products', value: '567', change: '+5%', icon: '📦' },
    { title: 'Total Orders', value: '890', change: '+8%', icon: '📝' },
    { title: 'Revenue', value: '$12,345', change: '+15%', icon: '💰' },
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'placed an order', time: '2 minutes ago' },
    { id: 2, user: 'Jane Smith', action: 'created an account', time: '5 minutes ago' },
    { id: 3, user: 'Mike Johnson', action: 'updated profile', time: '10 minutes ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
                <p className="text-sm text-green-500">{stat.change}</p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="font-medium text-gray-800">{activity.user}</span>
                <span className="text-gray-500"> {activity.action}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 