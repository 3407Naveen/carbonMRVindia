import React from 'react';
import { Users, Sprout, FileText, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface AggregatorDashboardProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    welcome: 'Aggregator Dashboard',
    projectOverview: 'Project Overview',
    activeFarmers: 'Active Farmers',
    totalPlots: 'Total Plots',
    carbonCredits: 'Carbon Credits Generated',
    pendingVerification: 'Pending Verification',
    carbonGeneration: 'Carbon Generation Trend',
    farmerDistribution: 'Farmer Distribution by District',
    recentReports: 'Recent MRV Reports'
  },
  hi: {
    welcome: 'एग्रीगेटर डैशबोर्ड',
    projectOverview: 'परियोजना अवलोकन',
    activeFarmers: 'सक्रिय किसान',
    totalPlots: 'कुल भूमि',
    carbonCredits: 'कार्बन क्रेडिट जनरेट',
    pendingVerification: 'सत्यापन प्रतीक्षित',
    carbonGeneration: 'कार्बन जनरेशन ट्रेंड',
    farmerDistribution: 'जिलेवार किसान वितरण',
    recentReports: 'हाल की MRV रिपोर्ट'
  }
};

const monthlyData = [
  { month: 'Jan', credits: 45 },
  { month: 'Feb', credits: 52 },
  { month: 'Mar', credits: 48 },
  { month: 'Apr', credits: 61 },
  { month: 'May', credits: 55 },
  { month: 'Jun', credits: 67 }
];

const districtData = [
  { district: 'Bangalore', farmers: 45 },
  { district: 'Mysore', farmers: 38 },
  { district: 'Hassan', farmers: 29 },
  { district: 'Mandya', farmers: 24 },
  { district: 'Tumkur', farmers: 18 }
];

export function AggregatorDashboard({ language }: AggregatorDashboardProps) {
  const t = translations[language];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{t.welcome}</h2>
        <p className="opacity-90">Karnataka Agroforestry Project | Project ID: KAP-2024-001</p>
      </div>

      {/* Project Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.activeFarmers}</p>
              <p className="text-2xl font-bold text-gray-900">154</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12 this month
              </p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.totalPlots}</p>
              <p className="text-2xl font-bold text-gray-900">342</p>
              <p className="text-xs text-gray-500">1,250 hectares</p>
            </div>
            <Sprout className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.carbonCredits}</p>
              <p className="text-2xl font-bold text-gray-900">1,245</p>
              <p className="text-xs text-green-600">Verified: 1,180</p>
            </div>
            <FileText className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.pendingVerification}</p>
              <p className="text-2xl font-bold text-gray-900">65</p>
              <p className="text-xs text-orange-600">3 days avg</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-sm font-semibold">!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Carbon Generation Trend */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">{t.carbonGeneration}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="credits" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Farmer Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">{t.farmerDistribution}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={districtData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="district" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="farmers" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">{t.recentReports}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MRV-2024-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Quarterly</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">245</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Verified
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MRV-2024-002</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monthly</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">67</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}