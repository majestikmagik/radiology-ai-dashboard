'use client';

import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Target,
  Calendar,
  BarChart3
} from 'lucide-react';

export default function AIInsights() {
  const insights = [
    {
      title: 'Detection Accuracy',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: Target,
      description: 'AI model accuracy over the last 30 days'
    },
    {
      title: 'Cases Analyzed',
      value: '1,847',
      change: '+187',
      changeType: 'positive',
      icon: Brain,
      description: 'Total cases processed this month'
    },
    {
      title: 'High Risk Detected',
      value: '23',
      change: '-5',
      changeType: 'positive',
      icon: AlertTriangle,
      description: 'Early detection of high-risk cases'
    },
    {
      title: 'Processing Time',
      value: '2.3s',
      change: '-0.8s',
      changeType: 'positive',
      icon: TrendingUp,
      description: 'Average analysis time per scan'
    }
  ];

  const recentAnalyses = [
    {
      id: 'A001',
      patientId: 'P001',
      patientName: 'John Smith',
      scanType: 'Chest X-Ray',
      aiConfidence: 87,
      findings: 'Nodule detected - Right upper lobe',
      riskLevel: 'high',
      timestamp: '2024-07-01 14:30'
    },
    {
      id: 'A002',
      patientId: 'P003',
      patientName: 'Robert Johnson',
      scanType: 'CT Scan',
      aiConfidence: 92,
      findings: 'Multiple calcifications - Both lungs',
      riskLevel: 'medium',
      timestamp: '2024-07-01 13:45'
    },
    {
      id: 'A003',
      patientId: 'P007',
      patientName: 'Sarah Wilson',
      scanType: 'Mammogram',
      aiConfidence: 96,
      findings: 'Dense tissue - Follow-up recommended',
      riskLevel: 'low',
      timestamp: '2024-07-01 12:15'
    }
  ];

  const modelPerformance = [
    { metric: 'Sensitivity', value: 95.8, target: 95.0 },
    { metric: 'Specificity', value: 92.3, target: 90.0 },
    { metric: 'Precision', value: 89.7, target: 88.0 },
    { metric: 'F1-Score', value: 92.6, target: 90.0 }
  ];

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AI Insights</h1>
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>Last updated: July 1, 2024</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-4 lg:p-6">
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                </div>
                <span className={`text-xs sm:text-sm font-medium ${
                  insight.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {insight.change}
                </span>
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">{insight.title}</h3>
              <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{insight.value}</p>
              <p className="text-xs sm:text-sm text-gray-500">{insight.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Model Performance */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center space-x-2 mb-4 sm:mb-6">
            <BarChart3 className="h-5 w-5 text-gray-600" />
            <h3 className="text-base sm:text-lg font-medium text-gray-900">Model Performance</h3>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {modelPerformance.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <span className="text-sm font-medium text-gray-700">{metric.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs sm:text-sm text-gray-500">Target: {metric.target}%</span>
                    <span className={`text-sm font-semibold ${
                      metric.value >= metric.target ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.value}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${(metric.value / 100) * 100}%` }}
                    ></div>
                    <div 
                      className="absolute top-0 w-0.5 h-full bg-red-400"
                      style={{ left: `${metric.target}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent AI Analyses */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4 sm:mb-6">Recent AI Analyses</h3>
          
          <div className="space-y-3 sm:space-y-4">
            {recentAnalyses.map((analysis) => (
              <div key={analysis.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-gray-700">
                        {analysis.patientName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{analysis.patientName}</p>
                      <p className="text-xs text-gray-500">{analysis.scanType}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(analysis.riskLevel)} flex-shrink-0`}>
                    {analysis.riskLevel.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-700 mb-2">{analysis.findings}</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-gray-500">
                  <span>Confidence: <span className={`font-medium ${getConfidenceColor(analysis.aiConfidence)}`}>
                    {analysis.aiConfidence}%
                  </span></span>
                  <span className="text-xs">{analysis.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Model Information */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">AI Model Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">ResNet-50</div>
            <p className="text-xs sm:text-sm text-gray-600">Base Architecture</p>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">v2.1.3</div>
            <p className="text-xs sm:text-sm text-gray-600">Model Version</p>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">250K+</div>
            <p className="text-xs sm:text-sm text-gray-600">Training Images</p>
          </div>
        </div>
      </div>
    </div>
  );
}
