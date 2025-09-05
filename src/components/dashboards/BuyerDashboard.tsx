import React from 'react';
import { ShoppingCart, TrendingUp, Award, Globe } from 'lucide-react';

interface BuyerDashboardProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    welcome: 'Carbon Credit Buyer Dashboard',
    availableCredits: 'Available Credits',
    purchasedCredits: 'Purchased Credits',
    portfolioValue: 'Portfolio Value',
    projects: 'Active Projects',
    marketplace: 'Marketplace Overview',
    projectImpact: 'Project Impact',
    buyCredits: 'Buy Credits',
    viewProject: 'View Project',
    farmers: 'farmers',
    hectares: 'hectares',
    villages: 'villages'
  },
  hi: {
    welcome: 'कार्बन क्रेडिट खरीदार डैशबोर्ड',
    availableCredits: 'उपलब्ध क्रेडिट',
    purchasedCredits: 'खरीदे गए क्रेडिट',
    portfolioValue: 'पोर्टफोलियो मूल्य',
    projects: 'सक्रिय परियोजनाएं',
    marketplace: 'बाज़ार अवलोकन',
    projectImpact: 'परियोजना प्रभाव',
    buyCredits: 'क्रेडिट खरीदें',
    viewProject: 'परियोजना देखें',
    farmers: 'किसान',
    hectares: 'हेक्टेयर',
    villages: 'गांव'
  }
};

export function BuyerDashboard({ language }: BuyerDashboardProps) {
  const t = translations[language];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{t.welcome}</h2>
        <p className="opacity-90">EcoTech Solutions Pvt Ltd | Buyer ID: ETS-BUY-001</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.availableCredits}</p>
              <p className="text-2xl font-bold text-gray-900">2,450</p>
              <p className="text-xs text-green-600">₹500-750 per credit</p>
            </div>
            <ShoppingCart className="h-8 w-8 text-indigo-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.purchasedCredits}</p>
              <p className="text-2xl font-bold text-gray-900">856</p>
              <p className="text-xs text-green-600">+125 this month</p>
            </div>
            <Award className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.portfolioValue}</p>
              <p className="text-2xl font-bold text-gray-900">₹5.2L</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5%
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.projects}</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-xs text-gray-500">Across 5 states</p>
            </div>
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Marketplace Overview */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">{t.marketplace}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price per Credit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verification</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Karnataka Agroforestry</div>
                    <div className="text-sm text-gray-500">154 {t.farmers}, 342 plots</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">245</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹675</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Verified
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">{t.buyCredits}</button>
                  <button className="text-gray-600 hover:text-gray-900">{t.viewProject}</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Tamil Nadu Rice Systems</div>
                    <div className="text-sm text-gray-500">89 {t.farmers}, 156 plots</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">156</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹550</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-gray-400 cursor-not-allowed mr-3">{t.buyCredits}</button>
                  <button className="text-gray-600 hover:text-gray-900">{t.viewProject}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Project Impact */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">{t.projectImpact}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">1,245</div>
            <div className="text-sm text-gray-600">Total Credits Purchased</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">243</div>
            <div className="text-sm text-gray-600">{t.farmers} Supported</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,250</div>
            <div className="text-sm text-gray-600">{t.hectares} Under Management</div>
          </div>
        </div>
      </div>
    </div>
  );
}