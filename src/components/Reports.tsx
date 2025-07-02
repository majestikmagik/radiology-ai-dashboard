'use client';

import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  Users
} from 'lucide-react';

export default function Reports() {
  const reportTemplates = [
    {
      id: 'weekly-summary',
      name: 'Weekly Summary Report',
      description: 'Comprehensive overview of weekly activities and findings',
      icon: BarChart3,
      frequency: 'Weekly',
      lastGenerated: '2024-06-30'
    },
    {
      id: 'patient-analysis',
      name: 'Patient Analysis Report',
      description: 'Detailed analysis report for specific patients',
      icon: Users,
      frequency: 'On-demand',
      lastGenerated: '2024-07-01'
    },
    {
      id: 'ai-performance',
      name: 'AI Performance Report',
      description: 'AI model performance metrics and accuracy statistics',
      icon: TrendingUp,
      frequency: 'Monthly',
      lastGenerated: '2024-06-28'
    },
    {
      id: 'risk-assessment',
      name: 'Risk Assessment Report',
      description: 'High-risk case identification and follow-up recommendations',
      icon: PieChart,
      frequency: 'Daily',
      lastGenerated: '2024-07-01'
    }
  ];

  const recentReports = [
    {
      id: 'R001',
      name: 'Weekly Cancer Detection Summary - June 2024',
      type: 'Weekly Summary',
      generatedDate: '2024-06-30',
      generatedBy: 'Dr. Sarah Johnson',
      status: 'Completed',
      fileSize: '2.3 MB'
    },
    {
      id: 'R002',
      name: 'AI Model Performance Analysis - Q2 2024',
      type: 'AI Performance',
      generatedDate: '2024-06-28',
      generatedBy: 'System Auto',
      status: 'Completed',
      fileSize: '1.8 MB'
    },
    {
      id: 'R003',
      name: 'Patient Risk Assessment - July 1st',
      type: 'Risk Assessment',
      generatedDate: '2024-07-01',
      generatedBy: 'Dr. Michael Chen',
      status: 'Completed',
      fileSize: '956 KB'
    },
    {
      id: 'R004',
      name: 'Monthly Radiology Statistics - June',
      type: 'Monthly Statistics',
      generatedDate: '2024-06-29',
      generatedBy: 'System Auto',
      status: 'Processing',
      fileSize: '---'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Reports</h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
            <FileText className="h-4 w-4" />
            <span>Custom Report</span>
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-3 sm:px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Report Templates</h3>
        </div>
        <div className="p-3 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {reportTemplates.map((template) => {
              const Icon = template.icon;
              return (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2">{template.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">{template.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
                          <span>Frequency: {template.frequency}</span>
                          <span>Last: {template.lastGenerated}</span>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs sm:text-sm flex-shrink-0">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Recent Reports</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Last 30 days</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Generated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Generated By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{report.name}</div>
                        <div className="text-sm text-gray-500">ID: {report.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {report.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {report.generatedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {report.generatedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {report.fileSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {report.status === 'Completed' && (
                        <>
                          <button className="text-blue-600 hover:text-blue-900">View</button>
                          <button className="text-green-600 hover:text-green-900 flex items-center">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </button>
                        </>
                      )}
                      {report.status === 'Processing' && (
                        <span className="text-yellow-600">Processing...</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
            </div>
            <div className="ml-3 lg:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-500">Total Reports</p>
              <p className="text-xl lg:text-2xl font-semibold text-gray-900">247</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <BarChart3 className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
            </div>
            <div className="ml-3 lg:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-500">This Month</p>
              <p className="text-xl lg:text-2xl font-semibold text-gray-900">23</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-600" />
            </div>
            <div className="ml-3 lg:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-500">Automated</p>
              <p className="text-xl lg:text-2xl font-semibold text-gray-900">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Download className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
            </div>
            <div className="ml-3 lg:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-500">Downloads</p>
              <p className="text-xl lg:text-2xl font-semibold text-gray-900">1,834</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
