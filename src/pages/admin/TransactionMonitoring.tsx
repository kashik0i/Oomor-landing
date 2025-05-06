import React, { useState } from 'react';
import { DataTable } from '../../components/admin/DataTable';
import { DollarSign, TrendingUp, CreditCard, Calendar, Download, Filter, Eye, BarChart2 } from 'lucide-react';

export const TransactionMonitoring: React.FC = () => {
  // Sample transaction data
  const [transactions, setTransactions] = useState([
    { 
      id: 'TRX-12345', 
      date: '2025-05-01', 
      vendor: 'TrendyFashion', 
      customer: 'John Doe', 
      amount: '$128.50', 
      fee: '$6.43', 
      type: 'Sale', 
      status: 'Completed',
      paymentMethod: 'Credit Card'
    },
    { 
      id: 'TRX-12346', 
      date: '2025-05-01', 
      vendor: 'HealthyMeals', 
      customer: 'Jane Smith', 
      amount: '$45.99', 
      fee: '$2.30', 
      type: 'Subscription', 
      status: 'Completed',
      paymentMethod: 'PayPal'
    },
    { 
      id: 'TRX-12347', 
      date: '2025-05-02', 
      vendor: 'CustomPrints', 
      customer: 'Mike Johnson', 
      amount: '$78.25', 
      fee: '$3.91', 
      type: 'Sale', 
      status: 'Completed',
      paymentMethod: 'Credit Card'
    },
    { 
      id: 'TRX-12348', 
      date: '2025-05-02', 
      vendor: 'HomeDecor', 
      customer: 'Sarah Williams', 
      amount: '$210.75', 
      fee: '$10.54', 
      type: 'Sale', 
      status: 'Completed',
      paymentMethod: 'Debit Card'
    },
    { 
      id: 'TRX-12349', 
      date: '2025-05-03', 
      vendor: 'ArtisanCrafts', 
      customer: 'David Brown', 
      amount: '$65.00', 
      fee: '$3.25', 
      type: 'Sale', 
      status: 'Completed',
      paymentMethod: 'Credit Card'
    },
    { 
      id: 'TRX-12350', 
      date: '2025-05-03', 
      vendor: 'PrintOnDemand', 
      customer: 'Emily Davis', 
      amount: '$42.99', 
      fee: '$2.15', 
      type: 'Service', 
      status: 'Completed',
      paymentMethod: 'PayPal'
    },
    { 
      id: 'TRX-12351', 
      date: '2025-05-04', 
      vendor: 'HealthyMeals', 
      customer: 'Robert Wilson', 
      amount: '$89.99', 
      fee: '$4.50', 
      type: 'Subscription', 
      status: 'Completed',
      paymentMethod: 'Credit Card'
    },
    { 
      id: 'TRX-12352', 
      date: '2025-05-04', 
      vendor: 'TrendyFashion', 
      customer: 'Lisa Martinez', 
      amount: '$156.75', 
      fee: '$7.84', 
      type: 'Sale', 
      status: 'Completed',
      paymentMethod: 'Debit Card'
    },
    { 
      id: 'TRX-12353', 
      date: '2025-05-05', 
      vendor: 'CustomPrints', 
      customer: 'Kevin Taylor', 
      amount: '$35.50', 
      fee: '$1.78', 
      type: 'Service', 
      status: 'Processing',
      paymentMethod: 'Credit Card'
    },
    { 
      id: 'TRX-12354', 
      date: '2025-05-05', 
      vendor: 'WellnessSubscriptions', 
      customer: 'Amanda Thomas', 
      amount: '$49.99', 
      fee: '$2.50', 
      type: 'Subscription', 
      status: 'Completed',
      paymentMethod: 'PayPal'
    },
  ]);

  // Columns for transactions table
  const transactionColumns = [
    { key: 'id', header: 'Transaction ID', sortable: true },
    { key: 'date', header: 'Date', sortable: true },
    { key: 'vendor', header: 'Vendor', sortable: true },
    { key: 'customer', header: 'Customer', sortable: true },
    { key: 'amount', header: 'Amount', sortable: true },
    { key: 'fee', header: 'Platform Fee', sortable: true },
    { key: 'type', header: 'Type', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
    { key: 'paymentMethod', header: 'Payment Method', sortable: true },
  ];

  // Action component for transactions
  const transactionActions = (transaction: any) => (
    <div className="flex space-x-2">
      <button className="p-1 text-blue-600 hover:text-blue-800">
        <Eye size={16} />
      </button>
    </div>
  );

  // Calculate total transaction amount and fees
  const totalAmount = transactions.reduce((sum, transaction) => {
    const amount = parseFloat(transaction.amount.replace('$', ''));
    return sum + amount;
  }, 0);

  const totalFees = transactions.reduce((sum, transaction) => {
    const fee = parseFloat(transaction.fee.replace('$', ''));
    return sum + fee;
  }, 0);

  // Filter options
  const [dateRange, setDateRange] = useState('last7days');
  const [transactionType, setTransactionType] = useState('all');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Transaction Monitoring</h1>
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
            <BarChart2 size={16} className="mr-2" />
            Reports
          </button>
        </div>
      </div>

      {/* Transaction Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Transactions</p>
              <p className="text-2xl font-bold text-gray-800">1,245</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <CreditCard size={24} className="text-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+15% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Transaction Volume</p>
              <p className="text-2xl font-bold text-gray-800">${totalAmount.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign size={24} className="text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+12% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Platform Fees</p>
              <p className="text-2xl font-bold text-gray-800">${totalFees.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <TrendingUp size={24} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-600">+8% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Fee Rate</p>
              <p className="text-2xl font-bold text-gray-800">5.0%</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <Calendar size={24} className="text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">No change from last month</p>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <select 
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Type</label>
            <select 
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="sale">Sales</option>
              <option value="subscription">Subscriptions</option>
              <option value="service">Services</option>
              <option value="refund">Refunds</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vendor</label>
            <select 
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Vendors</option>
              <option value="TrendyFashion">TrendyFashion</option>
              <option value="HealthyMeals">HealthyMeals</option>
              <option value="CustomPrints">CustomPrints</option>
              <option value="HomeDecor">HomeDecor</option>
              <option value="ArtisanCrafts">ArtisanCrafts</option>
              <option value="PrintOnDemand">PrintOnDemand</option>
              <option value="WellnessSubscriptions">WellnessSubscriptions</option>
            </select>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="mt-8">
        <DataTable
          columns={transactionColumns}
          data={transactions}
          title="Recent Transactions"
          actionComponent={transactionActions}
        />
      </div>

      {/* Fee Structure Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Transaction Fee Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Standard Sales</h3>
            <p className="text-gray-600 mb-2">2-5% commission on all sales processed through the platform</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">Current Rate:</span>
              <span className="font-medium text-gray-800">5%</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Service-Based Offerings</h3>
            <p className="text-gray-600 mb-2">15-30% commission on service-based offerings (delivery, custom printing, etc.)</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">Current Rate:</span>
              <span className="font-medium text-gray-800">20%</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Subscription Revenue</h3>
            <p className="text-gray-600 mb-2">Fixed monthly fees based on subscription tier</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">Current Rate:</span>
              <span className="font-medium text-gray-800">Tiered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionMonitoring;