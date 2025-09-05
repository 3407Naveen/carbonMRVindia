import React, { useState } from 'react';
import { FileText, Download, Calendar, CheckCircle } from 'lucide-react';

interface ReportGeneratorProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    title: 'MRV Report Generator',
    subtitle: 'Generate comprehensive Monitoring, Reporting & Verification reports',
    reportType: 'Report Type',
    quarterly: 'Quarterly Report',
    annual: 'Annual Report',
    verification: 'Verification Report',
    project: 'Project Selection',
    period: 'Reporting Period',
    startDate: 'Start Date',
    endDate: 'End Date',
    generate: 'Generate Report',
    preview: 'Report Preview',
    recentReports: 'Recent Reports',
    download: 'Download PDF',
    status: 'Status',
    generated: 'Generated',
    verified: 'Verified',
    submitted: 'Submitted'
  },
  hi: {
    title: 'MRV रिपोर्ट जनरेटर',
    subtitle: 'व्यापक निगरानी, रिपोर्टिंग और सत्यापन रिपोर्ट तैयार करें',
    reportType: 'रिपोर्ट प्रकार',
    quarterly: 'त्रैमासिक रिपोर्ट',
    annual: 'वार्षिक रिपोर्ट',
    verification: 'सत्यापन रिपोर्ट',
    project: 'परियोजना चयन',
    period: 'रिपोर्टिंग अवधि',
    startDate: 'प्रारंभ तिथि',
    endDate: 'समाप्ति तिथि',
    generate: 'रिपोर्ट तैयार करें',
    preview: 'रिपोर्ट पूर्वावलोकन',
    recentReports: 'हाल की रिपोर्ट',
    download: 'PDF डाउनलोड करें',
    status: 'स्थिति',
    generated: 'तैयार',
    verified: 'सत्यापित',
    submitted: 'जमा की गई'
  }
};

export function ReportGenerator({ language }: ReportGeneratorProps) {
  const [reportType, setReportType] = useState('quarterly');
  const [projectId, setProjectId] = useState('KAP-2024-001');
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-03-31');
  const [generatedReport, setGeneratedReport] = useState<any>(null);

  const t = translations[language];

  const recentReports = [
    {
      id: 'MRV-2024-001',
      type: 'Quarterly',
      project: 'Karnataka Agroforestry',
      credits: 245,
      status: 'verified',
      date: '2024-01-15',
      size: '2.3 MB'
    },
    {
      id: 'MRV-2024-002',
      type: 'Monthly',
      project: 'Tamil Nadu Rice',
      credits: 67,
      status: 'submitted',
      date: '2024-01-20',
      size: '1.8 MB'
    },
    {
      id: 'MRV-2024-003',
      type: 'Verification',
      project: 'Karnataka Agroforestry',
      credits: 0,
      status: 'generated',
      date: '2024-01-25',
      size: '3.1 MB'
    }
  ];

  const generateReport = () => {
    // Simulate report generation
    const report = {
      id: `MRV-${Date.now()}`,
      type: reportType,
      project: projectId,
      period: `${startDate} to ${endDate}`,
      summary: {
        totalCredits: 245,
        verifiedCredits: 220,
        farmers: 154,
        plots: 342,
        area: 1250
      },
      sections: [
        'Executive Summary',
        'Project Overview',
        'Methodology',
        'Data Collection',
        'Carbon Calculations',
        'Verification Results',
        'Uncertainties',
        'Recommendations'
      ]
    };
    setGeneratedReport(report);
  };

  const downloadReport = (reportId: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${reportId}.pdf`;
    link.click();
  };

  return (
    <div className="space-y-6">
      {/* Report Generator */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <FileText className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">{t.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{t.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.reportType}</label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="quarterly">{t.quarterly}</option>
                <option value="annual">{t.annual}</option>
                <option value="verification">{t.verification}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.project}</label>
              <select
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="KAP-2024-001">Karnataka Agroforestry Project</option>
                <option value="TRS-2024-001">Tamil Nadu Rice Systems</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.period}</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">{t.startDate}</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">{t.endDate}</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={generateReport}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>{t.generate}</span>
            </button>
          </div>

          {/* Right Column - Preview */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.preview}</h3>
            {generatedReport ? (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900">{generatedReport.id}</h4>
                  <p className="text-sm text-gray-600">{generatedReport.period}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="bg-white p-3 rounded">
                    <div className="font-medium text-gray-900">{generatedReport.summary.totalCredits}</div>
                    <div className="text-gray-500">Total Credits</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-medium text-gray-900">{generatedReport.summary.farmers}</div>
                    <div className="text-gray-500">Farmers</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Report Sections:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {generatedReport.sections.map((section: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {section}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => downloadReport(generatedReport.id)}
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>{t.download}</span>
                </button>
              </div>
            ) : (
              <div className="bg-gray-100 p-8 rounded-lg text-center text-gray-500">
                <FileText className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                <p>Click "Generate Report" to create your MRV report</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">{t.recentReports}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.status}</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentReports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.credits || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      report.status === 'verified' 
                        ? 'bg-green-100 text-green-800'
                        : report.status === 'submitted'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status === 'verified' ? t.verified : 
                       report.status === 'submitted' ? t.submitted : t.generated}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => downloadReport(report.id)}
                      className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                    >
                      <Download className="h-4 w-4" />
                      <span>{t.download}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}