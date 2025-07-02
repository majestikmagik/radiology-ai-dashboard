'use client';

import { 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Calendar,
  FileText
} from 'lucide-react';

export default function PatientsOverview() {
  const stats = [
    {
      title: 'Total Patients',
      value: '1,248',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Pending Analysis',
      value: '23',
      change: '+3',
      changeType: 'neutral',
      icon: Clock,
      color: 'yellow'
    },
    {
      title: 'High Risk Cases',
      value: '8',
      change: '-2',
      changeType: 'positive',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'Completed Today',
      value: '45',
      change: '+18%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'green'
    }
  ];

  const recentPatients = [
    {
      id: 'P001',
      name: 'John Smith',
      age: '65',
      lastScan: '2024-07-01',
      status: 'High Risk',
      riskLevel: 'high',
      scanType: 'Chest X-Ray'
    },
    {
      id: 'P002',
      name: 'Maria Garcia',
      age: '42',
      lastScan: '2024-07-01',
      status: 'Normal',
      riskLevel: 'normal',
      scanType: 'Lung CT'
    },
    {
      id: 'P003',
      name: 'Robert Johnson',
      age: '58',
      lastScan: '2024-06-30',
      status: 'Pending Review',
      riskLevel: 'pending',
      scanType: 'Chest X-Ray'
    },
    {
      id: 'P004',
      name: 'Emily Davis',
      age: '35',
      lastScan: '2024-06-30',
      status: 'Low Risk',
      riskLevel: 'low',
      scanType: 'Mammogram'
    },
    {
      id: 'P005',
      name: 'Michael Brown',
      age: '71',
      lastScan: '2024-06-29',
      status: 'High Risk',
      riskLevel: 'high',
      scanType: 'Lung CT'
    }
  ];

  const getStatusColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'low': return 'bg-green-100 text-green-800';
      case 'normal': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Patients Overview</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
          <FileText className="h-4 w-4" />
          <span>New Patient</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-4 lg:p-6">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg bg-${stat.color}-100 flex-shrink-0`}>
                  <Icon className={`h-5 w-5 lg:h-6 lg:w-6 text-${stat.color}-600`} />
                </div>
                <div className="ml-3 lg:ml-4 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">{stat.title}</p>
                  <div className="flex items-center">
                    <p className="text-xl lg:text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <span className={`ml-2 text-xs lg:text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Patients Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-3 sm:px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Patients</h3>
        </div>
        
        {/* Mobile Cards View */}
        <div className="block sm:hidden">
          {recentPatients.map((patient) => (
            <div key={patient.id} className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                    <div className="text-xs text-gray-500">ID: {patient.id}</div>
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(patient.riskLevel)}`}>
                  {patient.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div>
                  <span className="text-gray-500">Age:</span>
                  <span className="ml-1 text-gray-900">{patient.age}</span>
                </div>
                <div>
                  <span className="text-gray-500">Scan:</span>
                  <span className="ml-1 text-gray-900">{patient.scanType}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500">Last Scan:</span>
                  <span className="ml-1 text-gray-900">{patient.lastScan}</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">View</button>
                <button className="text-green-600 hover:text-green-900 text-sm font-medium">Analyze</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Scan Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Scan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs lg:text-sm font-medium text-gray-700">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3 lg:ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-xs lg:text-sm text-gray-500">ID: {patient.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.scanType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.lastScan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(patient.riskLevel)}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-green-600 hover:text-green-900">Analyze</button>
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
