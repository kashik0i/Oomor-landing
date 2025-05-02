import React, { useState } from 'react';
import { DataTable } from '../../components/admin/DataTable';
import { 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Target, 
  BarChart2, 
  Plus, 
  Edit, 
  Trash, 
  Download, 
  Filter,
  Zap,
  Star,
  Tag
} from 'lucide-react';

export const AdvertisingPlatform: React.FC = () => {
  // Sample ad campaigns data
  const [adCampaigns, setAdCampaigns] = useState([
    { 
      id: 1, 
      name: 'Summer Collection Promotion', 
      advertiser: 'TrendyFashion', 
      type: 'Featured Shop', 
      status: 'Active', 
      budget: '$2,500.00', 
      spent: '$1,245.75', 
      impressions: '45,678', 
      clicks: '2,345', 
      ctr: '5.13%', 
      startDate: '2023-05-01', 
      endDate: '2023-05-31' 
    },
    { 
      id: 2, 
      name: 'Healthy Meal Subscription', 
      advertiser: 'HealthyMeals', 
      type: 'Promoted Listing', 
      status: 'Active', 
      budget: '$1,800.00', 
      spent: '$950.25', 
      impressions: '32,450', 
      clicks: '1,876', 
      ctr: '5.78%', 
      startDate: '2023-05-05', 
      endDate: '2023-05-25' 
    },
    { 
      id: 3, 
      name: 'Custom T-Shirt Designs', 
      advertiser: 'CustomPrints', 
      type: 'Targeted Ads', 
      status: 'Active', 
      budget: '$1,200.00', 
      spent: '$780.50', 
      impressions: '28,970', 
      clicks: '1,456', 
      ctr: '5.03%', 
      startDate: '2023-05-03', 
      endDate: '2023-05-23' 
    },
    { 
      id: 4, 
      name: 'Home Decor Collection', 
      advertiser: 'HomeDecor', 
      type: 'Featured Shop', 
      status: 'Active', 
      budget: '$2,000.00', 
      spent: '$1,120.75', 
      impressions: '38,450', 
      clicks: '1,950', 
      ctr: '5.07%', 
      startDate: '2023-05-10', 
      endDate: '2023-05-30' 
    },
    { 
      id: 5, 
      name: 'Artisan Crafts Showcase', 
      advertiser: 'ArtisanCrafts', 
      type: 'Promoted Listing', 
      status: 'Scheduled', 
      budget: '$1,500.00', 
      spent: '$0.00', 
      impressions: '0', 
      clicks: '0', 
      ctr: '0.00%', 
      startDate: '2023-05-15', 
      endDate: '2023-06-15' 
    },
    { 
      id: 6, 
      name: 'Print On Demand Services', 
      advertiser: 'PrintOnDemand', 
      type: 'Targeted Ads', 
      status: 'Active', 
      budget: '$1,800.00', 
      spent: '$950.25', 
      impressions: '29,780', 
      clicks: '1,540', 
      ctr: '5.17%', 
      startDate: '2023-05-02', 
      endDate: '2023-05-22' 
    },
    { 
      id: 7, 
      name: 'Wellness Subscription Promo', 
      advertiser: 'WellnessSubscriptions', 
      type: 'Featured Shop', 
      status: 'Paused', 
      budget: '$2,200.00', 
      spent: '$1,450.80', 
      impressions: '42,670', 
      clicks: '2,230', 
      ctr: '5.23%', 
      startDate: '2023-04-15', 
      endDate: '2023-05-15' 
    },
  ]);

  // Sample ad placements data
  const [adPlacements, setAdPlacements] = useState([
    { 
      id: 1, 
      location: 'Homepage Banner', 
      type: 'Banner', 
      size: '1200x300', 
      basePrice: '$500/week', 
      availability: 'Available', 
      impressions: '125,000/week', 
      avgCTR: '4.8%' 
    },
    { 
      id: 2, 
      location: 'Marketplace Sidebar', 
      type: 'Sidebar', 
      size: '300x600', 
      basePrice: '$350/week', 
      availability: 'Available', 
      impressions: '95,000/week', 
      avgCTR: '3.5%' 
    },
    { 
      id: 3, 
      location: 'Category Page Top', 
      type: 'Banner', 
      size: '970x250', 
      basePrice: '$400/week', 
      availability: 'Booked', 
      impressions: '85,000/week', 
      avgCTR: '4.2%' 
    },
    { 
      id: 4, 
      location: 'Search Results', 
      type: 'Promoted Listing', 
      size: 'Variable', 
      basePrice: '$0.50/click', 
      availability: 'Available', 
      impressions: '150,000/week', 
      avgCTR: '5.1%' 
    },
    { 
      id: 5, 
      location: 'Featured Shop Carousel', 
      type: 'Carousel', 
      size: '600x400', 
      basePrice: '$450/week', 
      availability: 'Limited', 
      impressions: '110,000/week', 
      avgCTR: '6.2%' 
    },
    { 
      id: 6, 
      location: 'Mobile App Banner', 
      type: 'App Banner', 
      size: '640x150', 
      basePrice: '$300/week', 
      availability: 'Available', 
      impressions: '75,000/week', 
      avgCTR: '3.8%' 
    },
  ]);

  // Columns for ad campaigns table
  const campaignColumns = [
    { key: 'name', header: 'Campaign Name', sortable: true },
    { key: 'advertiser', header: 'Advertiser', sortable: true },
    { key: 'type', header: 'Type', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
    { key: 'budget', header: 'Budget', sortable: true },
    { key: 'spent', header: 'Spent', sortable: true },
    { key: 'impressions', header: 'Impressions', sortable: true },
    { key: 'clicks', header: 'Clicks', sortable: true },
    { key: 'ctr', header: 'CTR', sortable: true },
  ];

  // Columns for ad placements table
  const placementColumns = [
    { key: 'location', header: 'Location', sortable: true },
    { key: 'type', header: 'Type', sortable: true },
    { key: 'size', header: 'Size', sortable: true },
    { key: 'basePrice', header: 'Base Price', sortable: true },
    { key: 'availability', header: 'Availability', sortable: true },
    { key: 'impressions', header: 'Impressions', sortable: true },
    { key: 'avgCTR', header: 'Avg. CTR', sortable: true },
  ];

  // Action component for ad campaigns
  const campaignActions = (campaign: any) => (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Eye size={16} />
      </button>
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Edit size={16} />
      </button>
      <button className="p-1 text-red-600 hover:text-red-800">
        <Trash size={16} />
      </button>
    </div>
  );

  // Action component for ad placements
  const placementActions = (placement: any) => (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Eye size={16} />
      </button>
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Edit size={16} />
      </button>
    </div>
  );

  // Calculate total budget, spent, impressions, and clicks
  const totalBudget = adCampaigns.reduce((sum, campaign) => {
    const budget = parseFloat(campaign.budget.replace('$', '').replace(',', ''));
    return sum + budget;
  }, 0);

  const totalSpent = adCampaigns.reduce((sum, campaign) => {
    const spent = parseFloat(campaign.spent.replace('$', '').replace(',', ''));
    return sum + spent;
  }, 0);

  const totalImpressions = adCampaigns.reduce((sum, campaign) => {
    const impressions = parseInt(campaign.impressions.replace(',', ''));
    return sum + impressions;
  }, 0);

  const totalClicks = adCampaigns.reduce((sum, campaign) => {
    const clicks = parseInt(campaign.clicks.replace(',', ''));
    return sum + clicks;
  }, 0);

  // Calculate overall CTR
  const overallCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Advertising Platform</h1>
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
            New Campaign
          </button>
        </div>
      </div>

      {/* Advertising Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Ad Budget</p>
              <p className="text-2xl font-bold text-gray-800">${totalBudget.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <DollarSign size={24} className="text-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+12% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Ad Revenue</p>
              <p className="text-2xl font-bold text-gray-800">${totalSpent.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp size={24} className="text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+15% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Impressions</p>
              <p className="text-2xl font-bold text-gray-800">{totalImpressions.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Eye size={24} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+18% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average CTR</p>
              <p className="text-2xl font-bold text-gray-800">{overallCTR.toFixed(2)}%</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <Target size={24} className="text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+0.5% from last month</p>
          </div>
        </div>
      </div>

      {/* Ad Types Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-indigo-100 rounded-full mr-3">
              <Star size={20} className="text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Featured Shops</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Premium placement for vendors in the marketplace carousel and dedicated sections.
          </p>
          <div className="flex justify-between text-sm mt-4">
            <span className="text-gray-500">Base Price:</span>
            <span className="font-medium text-gray-800">$450-$500/week</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-500">Avg. CTR:</span>
            <span className="font-medium text-gray-800">5.5%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-green-100 rounded-full mr-3">
              <Tag size={20} className="text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Promoted Listings</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Higher visibility for products and services in search results and category pages.
          </p>
          <div className="flex justify-between text-sm mt-4">
            <span className="text-gray-500">Base Price:</span>
            <span className="font-medium text-gray-800">$0.50/click</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-500">Avg. CTR:</span>
            <span className="font-medium text-gray-800">4.3%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-full mr-3">
              <Zap size={20} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Targeted Ads</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Personalized ads based on user preferences and browsing history.
          </p>
          <div className="flex justify-between text-sm mt-4">
            <span className="text-gray-500">Base Price:</span>
            <span className="font-medium text-gray-800">$0.75/click</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-500">Avg. CTR:</span>
            <span className="font-medium text-gray-800">5.1%</span>
          </div>
        </div>
      </div>

      {/* Ad Campaigns Table */}
      <div className="mt-8">
        <DataTable
          columns={campaignColumns}
          data={adCampaigns}
          title="Active Ad Campaigns"
          actionComponent={campaignActions}
        />
      </div>

      {/* Ad Placements Table */}
      <div className="mt-8">
        <DataTable
          columns={placementColumns}
          data={adPlacements}
          title="Ad Placements"
          actionComponent={placementActions}
        />
      </div>

      {/* Advertising Policy */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Advertising Platform Policy</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            The Oomor advertising platform provides vendors with opportunities to increase visibility and reach more customers. All advertisements must comply with our content guidelines and ethical standards.
          </p>
          
          <div className="mt-4">
            <h3 className="font-medium text-gray-800 mb-2">Key Guidelines</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>All ad content must be accurate and not misleading</li>
              <li>Advertisements must be relevant to the Oomor marketplace</li>
              <li>Prohibited content includes adult content, illegal products/services, and discriminatory material</li>
              <li>Ads are subject to review before going live</li>
              <li>Performance metrics are provided in real-time to advertisers</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <h3 className="font-medium text-gray-800 mb-2">Pricing Model</h3>
            <p className="text-gray-600">
              Oomor offers both fixed-price placements (e.g., featured shops, banners) and performance-based pricing (cost-per-click for promoted listings). Pricing is adjusted quarterly based on platform growth and demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingPlatform;