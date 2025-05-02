import React from 'react';
import { DashboardCard } from '../../components/admin/DashboardCard';
import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  Activity,
  Clock
} from 'lucide-react';

export const DashboardHome: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12% from last month',
      icon: <Users size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Total Products',
      value: '567',
      change: '+5% from last month',
      icon: <Package size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Total Orders',
      value: '890',
      change: '+8% from last month',
      icon: <ShoppingCart size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Revenue',
      value: '$12,345',
      change: '+15% from last month',
      icon: <DollarSign size={24} className="text-indigo-600" />,
      isPositive: true
    },
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'placed an order', time: '2 minutes ago', amount: '$125.00' },
    { id: 2, user: 'Jane Smith', action: 'created an account', time: '5 minutes ago', amount: null },
    { id: 3, user: 'Mike Johnson', action: 'updated profile', time: '10 minutes ago', amount: null },
    { id: 4, user: 'Sarah Williams', action: 'placed an order', time: '15 minutes ago', amount: '$89.99' },
    { id: 5, user: 'David Brown', action: 'subscribed to newsletter', time: '30 minutes ago', amount: null },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            isPositive={stat.isPositive}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <span className="text-indigo-700 font-medium">{activity.user.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{activity.user}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                    <div className="flex items-center text-xs text-gray-400 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                </div>
                {activity.amount && (
                  <span className="font-medium text-gray-800">{activity.amount}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Monthly Overview</h2>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full"></span>
              <span className="text-xs text-gray-500">Orders</span>
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-2"></span>
              <span className="text-xs text-gray-500">Revenue</span>
            </div>
          </div>

          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <div className="text-center">
              <Activity className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500">Sales analytics chart will appear here</p>
              <p className="text-xs text-gray-400">Data visualization library needed</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-indigo-700">This Month</p>
              <p className="text-xl font-bold text-gray-800 mt-1">145 orders</p>
              <p className="text-xs text-indigo-600 mt-1">+12.5% from last month</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700">Total Revenue</p>
              <p className="text-xl font-bold text-gray-800 mt-1">$12,426</p>
              <p className="text-xs text-green-600 mt-1">+15.2% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-800">View All Orders</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: 'ORD-001', customer: 'John Doe', date: '2023-05-01', status: 'Completed', amount: '$125.00' },
                { id: 'ORD-002', customer: 'Sarah Williams', date: '2023-05-01', status: 'Processing', amount: '$89.99' },
                { id: 'ORD-003', customer: 'Michael Brown', date: '2023-04-30', status: 'Shipped', amount: '$245.50' },
                { id: 'ORD-004', customer: 'Emily Davis', date: '2023-04-29', status: 'Completed', amount: '$45.00' },
                { id: 'ORD-005', customer: 'James Wilson', date: '2023-04-28', status: 'Cancelled', amount: '$132.75' },
              ].map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                      'bg-red-100 text-red-800'}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

