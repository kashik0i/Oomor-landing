import React, { useState } from 'react';
import { DataTable } from '../../components/admin/DataTable';
import { 
  DollarSign, 
  Package, 
  Plus, 
  Edit, 
  Trash, 
  Download, 
  Filter,
  Zap,
  ShoppingBag,
  Truck,
  Briefcase,
  Users,
  Check,
  X
} from 'lucide-react';

export const AddOnServices: React.FC = () => {
  // Sample add-on services data
  const [addOnServices, setAddOnServices] = useState([
    { 
      id: 1, 
      name: 'Print-on-Demand T-shirts', 
      category: 'Merchandise', 
      provider: 'CustomPrints', 
      status: 'Active', 
      pricing: 'Per item + commission', 
      commission: '25%', 
      subscribers: 78, 
      monthlyRevenue: '$12,450.75' 
    },
    { 
      id: 2, 
      name: 'Healthy Meal Delivery', 
      category: 'Food Service', 
      provider: 'HealthyMeals', 
      status: 'Active', 
      pricing: 'Subscription + commission', 
      commission: '20%', 
      subscribers: 145, 
      monthlyRevenue: '$28,950.50' 
    },
    { 
      id: 3, 
      name: 'Artisanal Pickles', 
      category: 'Food Service', 
      provider: 'ArtisanPickles', 
      status: 'Active', 
      pricing: 'Per item + commission', 
      commission: '20%', 
      subscribers: 42, 
      monthlyRevenue: '$8,750.25' 
    },
    { 
      id: 4, 
      name: 'Custom Socks Printing', 
      category: 'Merchandise', 
      provider: 'CustomPrints', 
      status: 'Active', 
      pricing: 'Per item + commission', 
      commission: '25%', 
      subscribers: 56, 
      monthlyRevenue: '$9,870.50' 
    },
    { 
      id: 5, 
      name: 'Wellness Subscription Box', 
      category: 'Subscription Service', 
      provider: 'WellnessSubscriptions', 
      status: 'Active', 
      pricing: 'Subscription + commission', 
      commission: '30%', 
      subscribers: 98, 
      monthlyRevenue: '$19,600.00' 
    },
    { 
      id: 6, 
      name: 'Local Delivery Service', 
      category: 'Logistics', 
      provider: 'LocalDelivery', 
      status: 'Active', 
      pricing: 'Per delivery + commission', 
      commission: '30%', 
      subscribers: 112, 
      monthlyRevenue: '$16,800.50' 
    },
    { 
      id: 7, 
      name: 'Custom Merchandise Design', 
      category: 'Design Service', 
      provider: 'DigitalDesigns', 
      status: 'Pending Approval', 
      pricing: 'Per design + commission', 
      commission: '30%', 
      subscribers: 0, 
      monthlyRevenue: '$0.00' 
    },
    { 
      id: 8, 
      name: 'Craft Workshop Subscriptions', 
      category: 'Educational Service', 
      provider: 'CraftWorkshops', 
      status: 'Active', 
      pricing: 'Subscription + commission', 
      commission: '30%', 
      subscribers: 67, 
      monthlyRevenue: '$13,400.00' 
    },
  ]);

  // Sample integration requests data
  const [integrationRequests, setIntegrationRequests] = useState([
    { 
      id: 1, 
      serviceName: 'Organic Food Delivery', 
      provider: 'OrganicFoods', 
      category: 'Food Service', 
      requestDate: '2023-05-01', 
      status: 'Under Review', 
      notes: 'Requesting integration with shipping and payment systems' 
    },
    { 
      id: 2, 
      serviceName: 'Custom Jewelry', 
      provider: 'ArtisanJewelry', 
      category: 'Merchandise', 
      requestDate: '2023-05-03', 
      status: 'Under Review', 
      notes: 'Requesting product catalog integration' 
    },
    { 
      id: 3, 
      serviceName: 'Digital Art Prints', 
      provider: 'DigitalArtists', 
      category: 'Digital Products', 
      requestDate: '2023-04-28', 
      status: 'Approved', 
      notes: 'Integration with print-on-demand service' 
    },
    { 
      id: 4, 
      serviceName: 'Fitness Classes', 
      provider: 'FitnessPro', 
      category: 'Educational Service', 
      requestDate: '2023-04-25', 
      status: 'Rejected', 
      notes: "Service doesn't align with platform requirements" 
    },
  ]);

  // Columns for add-on services table
  const serviceColumns = [
    { key: 'name', header: 'Service Name', sortable: true },
    { key: 'category', header: 'Category', sortable: true },
    { key: 'provider', header: 'Provider', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
    { key: 'pricing', header: 'Pricing Model', sortable: true },
    { key: 'commission', header: 'Commission', sortable: true },
    { key: 'subscribers', header: 'Subscribers', sortable: true },
    { key: 'monthlyRevenue', header: 'Monthly Revenue', sortable: true },
  ];

  // Columns for integration requests table
  const requestColumns = [
    { key: 'serviceName', header: 'Service Name', sortable: true },
    { key: 'provider', header: 'Provider', sortable: true },
    { key: 'category', header: 'Category', sortable: true },
    { key: 'requestDate', header: 'Request Date', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
    { key: 'notes', header: 'Notes', sortable: false },
  ];

  // Action component for add-on services
  const serviceActions = (service: any) => (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Edit size={16} />
      </button>
      <button className="p-1 text-red-600 hover:text-red-800">
        <Trash size={16} />
      </button>
    </div>
  );

  // Action component for integration requests
  const requestActions = (request: any) => (
    <div className="flex space-x-2">
      {request.status === 'Under Review' && (
        <>
          <button className="p-1 text-green-600 hover:text-green-800">
            <Check size={16} />
          </button>
          <button className="p-1 text-red-600 hover:text-red-800">
            <X size={16} />
          </button>
        </>
      )}
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Edit size={16} />
      </button>
    </div>
  );

  // Calculate total revenue and subscribers
  const totalRevenue = addOnServices.reduce((sum, service) => {
    const revenue = parseFloat(service.monthlyRevenue.replace('$', '').replace(',', ''));
    return sum + revenue;
  }, 0);

  const totalSubscribers = addOnServices.reduce((sum, service) => {
    return sum + service.subscribers;
  }, 0);

  // Count active services by category
  const categoryCounts = addOnServices.reduce((counts: Record<string, number>, service) => {
    if (service.status === 'Active') {
      counts[service.category] = (counts[service.category] || 0) + 1;
    }
    return counts;
  }, {});

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Add-On Services Management</h1>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter size={16} className="mr-2 text-gray-500" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Download size={16} className="mr-2 text-gray-500" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            <Plus size={16} className="mr-2" />
            New Service
          </button>
        </div>
      </div>

      {/* Add-On Services Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Services</p>
              <p className="text-2xl font-bold text-gray-800">{addOnServices.filter(s => s.status === 'Active').length}</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <Package size={24} className="text-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+2 from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-800">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign size={24} className="text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+15% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Subscribers</p>
              <p className="text-2xl font-bold text-gray-800">{totalSubscribers.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users size={24} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+18% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Requests</p>
              <p className="text-2xl font-bold text-gray-800">{integrationRequests.filter(r => r.status === 'Under Review').length}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <Zap size={24} className="text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Requires attention</p>
          </div>
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-indigo-100 rounded-full mr-3">
              <ShoppingBag size={20} className="text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Merchandise</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Custom printing, branded products, and personalized items.
          </p>
          <div className="flex justify-between text-sm mt-4">
            <span className="text-gray-500">Active Services:</span>
            <span className="font-medium text-gray-800">{categoryCounts['Merchandise'] || 0}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-green-100 rounded-full mr-3">
              <Briefcase size={20} className="text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Food Services</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Meal delivery, food subscriptions, and specialty food products.
          </p>
          <div className="flex justify-between text-sm mt-4">
            <span className="text-gray-500">Active Services:</span>
            <span className="font-medium text-gray-800">{categoryCounts['Food Service'] || 0}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-full mr-3">
              <Truck size={20} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Logistics</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Delivery services, shipping integrations, and fulfillment options.
          </p>
          <div className="flex justify-between text-sm mt-4">
            <span className="text-gray-500">Active Services:</span>
            <span className="font-medium text-gray-800">{categoryCounts['Logistics'] || 0}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-purple-100 rounded-full mr-3">
              <Zap size={20} className="text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Subscription Services</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Recurring subscription boxes, educational content, and membership services.
          </p>
          <div className="flex justify-between text-sm mt-4">
            <span className="text-gray-500">Active Services:</span>
            <span className="font-medium text-gray-800">
              {(categoryCounts['Subscription Service'] || 0) + (categoryCounts['Educational Service'] || 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Add-On Services Table */}
      <div className="mt-8">
        <DataTable
          columns={serviceColumns}
          data={addOnServices}
          title="Active Add-On Services"
          actionComponent={serviceActions}
        />
      </div>

      {/* Integration Requests Table */}
      <div className="mt-8">
        <DataTable
          columns={requestColumns}
          data={integrationRequests}
          title="Integration Requests"
          actionComponent={requestActions}
        />
      </div>

      {/* Add-On Services Policy */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add-On Services Policy</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Oomor's add-on services program allows third-party service providers to integrate their offerings with our platform, creating additional value for vendors and customers.
          </p>
          
          <div className="mt-4">
            <h3 className="font-medium text-gray-800 mb-2">Integration Requirements</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Services must complement the Oomor ecosystem and provide value to our users</li>
              <li>Providers must meet our quality and reliability standards</li>
              <li>Technical integration must follow our API guidelines and security requirements</li>
              <li>Service providers must agree to our revenue sharing model</li>
              <li>Regular performance reviews ensure continued quality of service</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <h3 className="font-medium text-gray-800 mb-2">Approval Process</h3>
            <p className="text-gray-600">
              New service integration requests undergo a thorough review process, including business alignment, technical feasibility, and security assessment. The typical approval timeline is 2-3 weeks from submission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnServices;