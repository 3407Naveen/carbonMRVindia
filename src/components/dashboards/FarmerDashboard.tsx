import React from 'react';
import { Sprout, Calculator, Wallet, TrendingUp, MapPin, Camera } from 'lucide-react';

interface FarmerDashboardProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    welcome: 'Welcome, Farmer',
    totalCredits: 'Total Carbon Credits',
    earnings: 'Total Earnings',
    plots: 'Registered Plots',
    recentActivity: 'Recent Activity',
    quickActions: 'Quick Actions',
    registerPlot: 'Register New Plot',
    calculateCarbon: 'Calculate Carbon',
    viewWallet: 'View Wallet',
    uploadPhotos: 'Upload Photos',
    plotRegistered: 'New plot registered - Plot ID: AG001',
    photosUploaded: 'Tree photos uploaded for Plot AG001',
    creditEarned: 'Earned 2.5 carbon credits',
    paymentReceived: 'Payment of ₹1,250 received',
    status: 'Status',
    verified: 'Verified',
    pending: 'Pending Verification'
  },
  hi: {
    welcome: 'स्वागत, किसान',
    totalCredits: 'कुल कार्बन क्रेडिट',
    earnings: 'कुल आय',
    plots: 'पंजीकृत भूमि',
    recentActivity: 'हाल की गतिविधि',
    quickActions: 'त्वरित क्रियाएं',
    registerPlot: 'नई भूमि पंजीकृत करें',
    calculateCarbon: 'कार्बन गणना करें',
    viewWallet: 'वॉलेट देखें',
    uploadPhotos: 'तस्वीरें अपलोड करें',
    plotRegistered: 'नई भूमि पंजीकृत - भूमि ID: AG001',
    photosUploaded: 'भूमि AG001 के लिए पेड़ की तस्वीरें अपलोड की गईं',
    creditEarned: '2.5 कार्बन क्रेडिट अर्जित',
    paymentReceived: '₹1,250 का भुगतान प्राप्त',
    status: 'स्थिति',
    verified: 'सत्यापित',
    pending: 'सत्यापन प्रतीक्षित'
  }
};

export function FarmerDashboard({ language }: FarmerDashboardProps) {
  const t = translations[language];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{t.welcome}</h2>
        <p className="opacity-90">राजेश कुमार | Farm ID: IN-KA-001</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.totalCredits}</p>
              <p className="text-2xl font-bold text-gray-900">12.5</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.5 {t.status}: {t.pending}
              </p>
            </div>
            <Calculator className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.earnings}</p>
              <p className="text-2xl font-bold text-gray-900">₹6,250</p>
              <p className="text-xs text-green-600">Last payout: ₹1,250</p>
            </div>
            <Wallet className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.plots}</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-xs text-gray-500">2.5 hectares total</p>
            </div>
            <Sprout className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">{t.quickActions}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
            <MapPin className="h-6 w-6 text-green-600 mb-2" />
            <span className="text-sm font-medium text-center">{t.registerPlot}</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
            <Calculator className="h-6 w-6 text-green-600 mb-2" />
            <span className="text-sm font-medium text-center">{t.calculateCarbon}</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
            <Wallet className="h-6 w-6 text-green-600 mb-2" />
            <span className="text-sm font-medium text-center">{t.viewWallet}</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
            <Camera className="h-6 w-6 text-green-600 mb-2" />
            <span className="text-sm font-medium text-center">{t.uploadPhotos}</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">{t.recentActivity}</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50">
            <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{t.plotRegistered}</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50">
            <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{t.photosUploaded}</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-yellow-50">
            <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{t.creditEarned}</p>
              <p className="text-xs text-gray-500">3 days ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50">
            <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{t.paymentReceived}</p>
              <p className="text-xs text-gray-500">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}