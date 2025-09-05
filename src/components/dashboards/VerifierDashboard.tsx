import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface VerifierDashboardProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    welcome: 'Verifier Dashboard',
    pendingVerification: 'Pending Verification',
    verifiedCredits: 'Verified Credits',
    flaggedItems: 'Flagged Items',
    avgVerificationTime: 'Avg Verification Time',
    recentVerifications: 'Recent Verification Tasks',
    dataIntegrity: 'Data Integrity Checks',
    auditLog: 'Audit Log',
    verify: 'Verify',
    review: 'Review',
    reject: 'Reject'
  },
  hi: {
    welcome: 'सत्यापनकर्ता डैशबोर्ड',
    pendingVerification: 'सत्यापन प्रतीक्षित',
    verifiedCredits: 'सत्यापित क्रेडिट',
    flaggedItems: 'चिह्नित आइटम',
    avgVerificationTime: 'औसत सत्यापन समय',
    recentVerifications: 'हाल के सत्यापन कार्य',
    dataIntegrity: 'डेटा अखंडता जांच',
    auditLog: 'ऑडिट लॉग',
    verify: 'सत्यापित करें',
    review: 'समीक्षा करें',
    reject: 'अस्वीकार करें'
  }
};

export function VerifierDashboard({ language }: VerifierDashboardProps) {
  const t = translations[language];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{t.welcome}</h2>
        <p className="opacity-90">Certification Body: Green Standards India | Verifier ID: GSI-VER-001</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.pendingVerification}</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
              <p className="text-xs text-orange-600">High priority: 5</p>
            </div>
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.verifiedCredits}</p>
              <p className="text-2xl font-bold text-gray-900">1,856</p>
              <p className="text-xs text-green-600">This month: 245</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.flaggedItems}</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
              <p className="text-xs text-red-600">Needs attention</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.avgVerificationTime}</p>
              <p className="text-2xl font-bold text-gray-900">2.3</p>
              <p className="text-xs text-gray-500">days</p>
            </div>
            <Shield className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Verification Tasks */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">{t.recentVerifications}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plot ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Quality</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">F-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AG-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12.5</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Good
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900 mr-3">{t.verify}</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-3">{t.review}</button>
                  <button className="text-red-600 hover:text-red-900">{t.reject}</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">F-002</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AG-002</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8.3</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Review
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900 mr-3">{t.verify}</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-3">{t.review}</button>
                  <button className="text-red-600 hover:text-red-900">{t.reject}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Integrity Checks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">{t.dataIntegrity}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">GPS Accuracy Check</span>
              </div>
              <span className="text-xs text-green-600 font-medium">98.5%</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Photo Integrity</span>
              </div>
              <span className="text-xs text-green-600 font-medium">96.2%</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium">Timestamp Verification</span>
              </div>
              <span className="text-xs text-yellow-600 font-medium">89.1%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">{t.auditLog}</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Plot AG-001 verified by GSI-VER-001</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
              <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Data discrepancy flagged for Plot AG-002</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
              <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Duplicate photo detected for Plot AG-003</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}