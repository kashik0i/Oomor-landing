import React from 'react';
import { DashboardCard } from '../../components/admin/DashboardCard';
import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  Activity,
  Clock,
  Store,
  Briefcase,
  Award,
  Grid,
  CreditCard,
  Gift
} from 'lucide-react';

export const DashboardHome: React.FC = () => {
  const stats = [
    {
      title: 'Total Mini-Apps',
      value: '328',
      change: '+15% from last month',
      icon: <Grid size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Vendor Stores',
      value: '245',
      change: '+18% from last month',
      icon: <Store size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Service Providers',
      value: '83',
      change: '+9% from last month',
      icon: <Briefcase size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Active Users',
      value: '5,678',
      change: '+22% from last month',
      icon: <Users size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Total Orders',
      value: '1,892',
      change: '+12% from last month',
      icon: <ShoppingCart size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Platform Revenue',
      value: '$38,425',
      change: '+16% from last month',
      icon: <DollarSign size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Subscription Revenue',
      value: '$12,780',
      change: '+8% from last month',
      icon: <Gift size={24} className="text-indigo-600" />,
      isPositive: true
    },
    {
      title: 'Transaction Fees',
      value: '$25,645',
      change: '+19% from last month',
      icon: <CreditCard size={24} className="text-indigo-600" />,
      isPositive: true
    },
  ];

  const recentActivity = [
    { id: 1, user: 'HealthyMeals', action: 'created a new mini-app', time: '2 minutes ago', type: 'service' },
    { id: 2, user: 'FashionBoutique', action: 'processed 5 orders', time: '5 minutes ago', type: 'store' },
    { id: 3, user: 'Mike Johnson', action: 'subscribed to premium plan', time: '10 minutes ago', type: 'vendor' },
    { id: 4, user: 'ArtisanCrafts', action: 'added new products', time: '15 minutes ago', type: 'store' },
    { id: 5, user: 'PrintOnDemand', action: 'completed service integration', time: '30 minutes ago', type: 'service' },
  ];

  const pendingApprovals = [
    { id: 1, name: 'Organic Foods Co.', type: 'Storefront', submitted: '2 days ago' },
    { id: 2, name: 'Custom Tees', type: 'Print Service', submitted: '3 days ago' },
    { id: 3, name: 'Artisan Pickles', type: 'Food Service', submitted: '3 days ago' },
    { id: 4, name: 'Wellness Subscriptions', type: 'Subscription Service', submitted: '4 days ago' },
  ];

  const topPerformers = [
    { id: 1, name: 'TrendyFashion', type: 'Storefront', sales: '$12,450', growth: '+32%' },
    { id: 2, name: 'HealthyMeals', type: 'Meal Service', sales: '$9,870', growth: '+27%' },
    { id: 3, name: 'CustomPrints', type: 'Print Service', sales: '$8,340', growth: '+24%' },
    { id: 4, name: 'HomeDecor', type: 'Storefront', sales: '$7,890', growth: '+19%' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.slice(0, 4).map((stat) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.slice(4, 8).map((stat) => (
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
            <h2 className="text-lg font-semibold text-gray-800">Recent Platform Activity</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    activity.type === 'service' 
                      ? 'bg-blue-100' 
                      : activity.type === 'store' 
                        ? 'bg-green-100' 
                        : 'bg-indigo-100'
                  }`}>
                    <span className={`font-medium ${
                      activity.type === 'service' 
                        ? 'text-blue-700' 
                        : activity.type === 'store' 
                          ? 'text-green-700' 
                          : 'text-indigo-700'
                    }`}>{activity.user.charAt(0)}</span>
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
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activity.type === 'service' 
                    ? 'bg-blue-100 text-blue-800' 
                    : activity.type === 'store' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-indigo-100 text-indigo-800'
                }`}>
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Pending Mini-App Approvals</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium text-gray-800">{approval.name}</p>
                  <p className="text-sm text-gray-500">{approval.type}</p>
                  <p className="text-xs text-gray-400">Submitted: {approval.submitted}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300">
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Mini-Apps */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Top Performing Mini-Apps</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">View Report</button>
          </div>
          <div className="space-y-4">
            {topPerformers.map((performer) => (
              <div key={performer.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium text-gray-800">{performer.name}</p>
                  <p className="text-sm text-gray-500">{performer.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">{performer.sales}</p>
                  <p className="text-sm text-green-600">{performer.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Platform Growth</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-md hover:bg-indigo-200">
                Monthly
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200">
                Quarterly
              </button>
            </div>
          </div>
          <div className="h-64 w-full bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-400">Growth Chart Visualization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

