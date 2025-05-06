import React, { useState } from 'react';
import { DataTable } from '../../components/admin/DataTable';
import { Edit, Trash, Plus, Check, X, DollarSign, Award, Users, Package } from 'lucide-react';

export const SubscriptionsManagement: React.FC = () => {
  // Sample subscription plans data based on the README
  const [subscriptionPlans, setSubscriptionPlans] = useState([
    {
      id: 1,
      name: 'Free',
      price: '$0',
      billingCycle: 'Monthly',
      features: [
        'Basic storefront',
        'Limited product listings (up to 10)',
        'Standard support',
        'Basic analytics',
      ],
      status: 'Active',
      subscribers: 1245,
      revenue: '$0'
    },
    {
      id: 2,
      name: 'Basic',
      price: '$19.99',
      billingCycle: 'Monthly',
      features: [
        'Enhanced storefront',
        'Up to 100 product listings',
        'Priority email support',
        'Basic analytics',
        'Custom domain',
      ],
      status: 'Active',
      subscribers: 876,
      revenue: '$17,511.24'
    },
    {
      id: 3,
      name: 'Professional',
      price: '$49.99',
      billingCycle: 'Monthly',
      features: [
        'Advanced storefront customization',
        'Unlimited product listings',
        'Priority support',
        'Advanced analytics',
        'Custom domain',
        'API access',
        'Multiple admin accounts',
      ],
      status: 'Active',
      subscribers: 432,
      revenue: '$21,595.68'
    },
    {
      id: 4,
      name: 'Enterprise',
      price: '$99.99',
      billingCycle: 'Monthly',
      features: [
        'Full customization',
        'Unlimited everything',
        'Dedicated support',
        'Enterprise analytics',
        'Custom domain',
        'API access',
        'Multiple admin accounts',
        'White-label options',
        'Custom integrations',
      ],
      status: 'Active',
      subscribers: 128,
      revenue: '$12,798.72'
    },
  ]);

  // Sample subscribers data
  const [subscribers, setSubscribers] = useState([
    { id: 1, name: 'TrendyFashion', plan: 'Enterprise', status: 'Active', startDate: '2025-01-15', nextBilling: '2025-06-15', revenue: '$599.94' },
    { id: 2, name: 'HealthyMeals', plan: 'Professional', status: 'Active', startDate: '2025-02-10', nextBilling: '2025-06-10', revenue: '$249.95' },
    { id: 3, name: 'CustomPrints', plan: 'Professional', status: 'Active', startDate: '2025-01-22', nextBilling: '2025-06-22', revenue: '$249.95' },
    { id: 4, name: 'HomeDecor', plan: 'Basic', status: 'Active', startDate: '2025-03-05', nextBilling: '2025-06-05', revenue: '$99.95' },
    { id: 5, name: 'ArtisanCrafts', plan: 'Basic', status: 'Active', startDate: '2025-02-18', nextBilling: '2025-06-18', revenue: '$99.95' },
    { id: 6, name: 'OrganicFoods', plan: 'Free', status: 'Active', startDate: '2025-04-01', nextBilling: 'N/A', revenue: '$0' },
    { id: 7, name: 'PrintOnDemand', plan: 'Enterprise', status: 'Active', startDate: '2025-01-10', nextBilling: '2025-06-10', revenue: '$599.94' },
    { id: 8, name: 'WellnessSubscriptions', plan: 'Professional', status: 'Active', startDate: '2025-03-15', nextBilling: '2025-06-15', revenue: '$249.95' },
  ]);

  // Columns for subscription plans table
  const planColumns = [
    { key: 'name', header: 'Plan Name', sortable: true },
    { key: 'price', header: 'Price', sortable: true },
    { key: 'billingCycle', header: 'Billing Cycle', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
    { key: 'subscribers', header: 'Subscribers', sortable: true },
    { key: 'revenue', header: 'Revenue', sortable: true },
  ];

  // Columns for subscribers table
  const subscriberColumns = [
    { key: 'name', header: 'Vendor Name', sortable: true },
    { key: 'plan', header: 'Subscription Plan', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
    { key: 'startDate', header: 'Start Date', sortable: true },
    { key: 'nextBilling', header: 'Next Billing', sortable: true },
    { key: 'revenue', header: 'Revenue', sortable: true },
  ];

  // Action component for subscription plans
  const planActions = (plan: any) => (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Edit size={16} />
      </button>
      <button className="p-1 text-red-600 hover:text-red-800">
        <Trash size={16} />
      </button>
    </div>
  );

  // Action component for subscribers
  const subscriberActions = (subscriber: any) => (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Edit size={16} />
      </button>
      <button className="p-1 text-red-600 hover:text-red-800">
        <Trash size={16} />
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Subscription Management</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          <Plus size={16} className="mr-2" />
          Add New Plan
        </button>
      </div>

      {/* Subscription Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Subscribers</p>
              <p className="text-2xl font-bold text-gray-800">2,681</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <Users size={24} className="text-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+12% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-800">$51,905.64</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign size={24} className="text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+8% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Plans</p>
              <p className="text-2xl font-bold text-gray-800">4</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Package size={24} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">No change from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Premium Conversion</p>
              <p className="text-2xl font-bold text-gray-800">53.6%</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <Award size={24} className="text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+2.4% from last month</p>
          </div>
        </div>
      </div>

      {/* Subscription Plans Table */}
      <div className="mt-8">
        <DataTable
          columns={planColumns}
          data={subscriptionPlans}
          title="Subscription Plans"
          actionComponent={planActions}
        />
      </div>

      {/* Subscribers Table */}
      <div className="mt-8">
        <DataTable
          columns={subscriberColumns}
          data={subscribers}
          title="Recent Subscribers"
          actionComponent={subscriberActions}
        />
      </div>
    </div>
  );
};

export default SubscriptionsManagement;