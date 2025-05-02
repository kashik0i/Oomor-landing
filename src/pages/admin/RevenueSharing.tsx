import React, { useState } from 'react';
import { DataTable } from '../../components/admin/DataTable';
import { DollarSign, Percent, Settings, Download, BarChart2, Edit, Users, Store, Briefcase } from 'lucide-react';

export const RevenueSharing: React.FC = () => {
  // Sample revenue sharing data for service providers
  const [serviceProviders, setServiceProviders] = useState([
    { 
      id: 1, 
      name: 'HealthyMeals', 
      type: 'Food Delivery', 
      totalRevenue: '$45,780.25', 
      platformShare: '$9,156.05', 
      providerShare: '$36,624.20', 
      sharePercentage: '80%', 
      status: 'Active' 
    },
    { 
      id: 2, 
      name: 'CustomPrints', 
      type: 'Print Service', 
      totalRevenue: '$32,450.75', 
      platformShare: '$8,112.69', 
      providerShare: '$24,338.06', 
      sharePercentage: '75%', 
      status: 'Active' 
    },
    { 
      id: 3, 
      name: 'PrintOnDemand', 
      type: 'Print Service', 
      totalRevenue: '$28,950.50', 
      platformShare: '$7,237.63', 
      providerShare: '$21,712.87', 
      sharePercentage: '75%', 
      status: 'Active' 
    },
    { 
      id: 4, 
      name: 'ArtisanPickles', 
      type: 'Food Service', 
      totalRevenue: '$12,780.30', 
      platformShare: '$2,556.06', 
      providerShare: '$10,224.24', 
      sharePercentage: '80%', 
      status: 'Active' 
    },
    { 
      id: 5, 
      name: 'WellnessSubscriptions', 
      type: 'Subscription Service', 
      totalRevenue: '$35,670.90', 
      platformShare: '$10,701.27', 
      providerShare: '$24,969.63', 
      sharePercentage: '70%', 
      status: 'Active' 
    },
    { 
      id: 6, 
      name: 'LocalDelivery', 
      type: 'Delivery Service', 
      totalRevenue: '$18,450.60', 
      platformShare: '$5,535.18', 
      providerShare: '$12,915.42', 
      sharePercentage: '70%', 
      status: 'Active' 
    },
    { 
      id: 7, 
      name: 'CraftWorkshops', 
      type: 'Educational Service', 
      totalRevenue: '$9,870.45', 
      platformShare: '$2,961.14', 
      providerShare: '$6,909.31', 
      sharePercentage: '70%', 
      status: 'Active' 
    },
    { 
      id: 8, 
      name: 'DigitalDesigns', 
      type: 'Design Service', 
      totalRevenue: '$22,340.80', 
      platformShare: '$6,702.24', 
      providerShare: '$15,638.56', 
      sharePercentage: '70%', 
      status: 'Active' 
    },
  ]);

  // Sample revenue sharing models
  const [sharingModels, setSharingModels] = useState([
    { 
      id: 1, 
      name: 'Standard E-commerce', 
      applicableTo: 'Product Sales', 
      platformShare: '5%', 
      providerShare: '95%', 
      description: 'Standard commission for all product sales through the platform' 
    },
    { 
      id: 2, 
      name: 'Food Service', 
      applicableTo: 'Food Delivery, Meal Subscriptions', 
      platformShare: '20%', 
      providerShare: '80%', 
      description: 'Commission for food-related services including delivery and subscriptions' 
    },
    { 
      id: 3, 
      name: 'Print Services', 
      applicableTo: 'Custom Printing, Print-on-Demand', 
      platformShare: '25%', 
      providerShare: '75%', 
      description: 'Commission for all printing and customization services' 
    },
    { 
      id: 4, 
      name: 'Educational Services', 
      applicableTo: 'Workshops, Courses, Training', 
      platformShare: '30%', 
      providerShare: '70%', 
      description: 'Commission for educational content and services' 
    },
    { 
      id: 5, 
      name: 'Delivery Services', 
      applicableTo: 'Local Delivery, Shipping', 
      platformShare: '30%', 
      providerShare: '70%', 
      description: 'Commission for delivery and logistics services' 
    },
    { 
      id: 6, 
      name: 'Subscription Services', 
      applicableTo: 'Recurring Subscriptions', 
      platformShare: '30%', 
      providerShare: '70%', 
      description: 'Commission for subscription-based services' 
    },
  ]);

  // Columns for service providers table
  const providerColumns = [
    { key: 'name', header: 'Provider Name', sortable: true },
    { key: 'type', header: 'Service Type', sortable: true },
    { key: 'totalRevenue', header: 'Total Revenue', sortable: true },
    { key: 'platformShare', header: 'Platform Share', sortable: true },
    { key: 'providerShare', header: 'Provider Share', sortable: true },
    { key: 'sharePercentage', header: 'Share %', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
  ];

  // Columns for sharing models table
  const modelColumns = [
    { key: 'name', header: 'Model Name', sortable: true },
    { key: 'applicableTo', header: 'Applicable To', sortable: true },
    { key: 'platformShare', header: 'Platform Share', sortable: true },
    { key: 'providerShare', header: 'Provider Share', sortable: true },
    { key: 'description', header: 'Description', sortable: false },
  ];

  // Action component for service providers
  const providerActions = (provider: any) => (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Edit size={16} />
      </button>
    </div>
  );

  // Action component for sharing models
  const modelActions = (model: any) => (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Edit size={16} />
      </button>
    </div>
  );

  // Calculate total revenue and shares
  const totalRevenue = serviceProviders.reduce((sum, provider) => {
    const revenue = parseFloat(provider.totalRevenue.replace('$', '').replace(',', ''));
    return sum + revenue;
  }, 0);

  const totalPlatformShare = serviceProviders.reduce((sum, provider) => {
    const share = parseFloat(provider.platformShare.replace('$', '').replace(',', ''));
    return sum + share;
  }, 0);

  const totalProviderShare = serviceProviders.reduce((sum, provider) => {
    const share = parseFloat(provider.providerShare.replace('$', '').replace(',', ''));
    return sum + share;
  }, 0);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Revenue Sharing Management</h1>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Download size={16} className="mr-2 text-gray-500" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <BarChart2 size={16} className="mr-2 text-gray-500" />
            Reports
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            <Settings size={16} className="mr-2" />
            Configure
          </button>
        </div>
      </div>

      {/* Revenue Sharing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Service Revenue</p>
              <p className="text-2xl font-bold text-gray-800">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <DollarSign size={24} className="text-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+18% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Platform Revenue</p>
              <p className="text-2xl font-bold text-gray-800">${totalPlatformShare.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Store size={24} className="text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+15% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Provider Revenue</p>
              <p className="text-2xl font-bold text-gray-800">${totalProviderShare.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Briefcase size={24} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+20% from last month</p>
          </div>
        </div>
      </div>

      {/* Revenue Sharing Models */}
      <div className="mt-8">
        <DataTable
          columns={modelColumns}
          data={sharingModels}
          title="Revenue Sharing Models"
          actionComponent={modelActions}
        />
      </div>

      {/* Service Providers */}
      <div className="mt-8">
        <DataTable
          columns={providerColumns}
          data={serviceProviders}
          title="Service Providers"
          actionComponent={providerActions}
        />
      </div>

      {/* Revenue Sharing Policy */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Sharing Policy</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Oomor implements a fair and transparent revenue sharing model that varies based on the type of service offered. Our goal is to create a sustainable ecosystem that benefits both the platform and our service providers.
          </p>
          
          <div className="mt-4">
            <h3 className="font-medium text-gray-800 mb-2">Key Principles</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Revenue share percentages are determined by service category and operational costs</li>
              <li>All fees and commissions are clearly communicated to service providers</li>
              <li>Premium service providers may qualify for more favorable revenue sharing terms</li>
              <li>Revenue sharing models are reviewed quarterly to ensure competitiveness</li>
              <li>Special promotional periods may temporarily adjust revenue sharing percentages</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <h3 className="font-medium text-gray-800 mb-2">Payment Schedule</h3>
            <p className="text-gray-600">
              Service provider payouts are processed on a bi-weekly basis, with a 3-day settlement period. All transactions are fully transparent and can be tracked through the provider dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueSharing;