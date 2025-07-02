'use client';

import { useState } from 'react';
import { 
  Upload, 
  Zap, 
  FileImage, 
  Brain, 
  AlertTriangle, 
  CheckCircle,
  Download,
  Eye
} from 'lucide-react';

export default function XRayAnalysis() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const runAIAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        confidence: 87,
        findings: [
          { type: 'nodule', location: 'Right upper lobe', probability: 0.85, severity: 'high' },
          { type: 'opacity', location: 'Left lower lobe', probability: 0.62, severity: 'medium' },
          { type: 'calcification', location: 'Hilum', probability: 0.43, severity: 'low' }
        ],
        recommendation: 'Immediate follow-up recommended. Consider CT scan for detailed evaluation.',
        riskLevel: 'high'
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">X-Ray Analysis</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base cursor-pointer">
          <Download className="h-4 w-4" />
          <span>Export Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Image Upload Section */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upload X-Ray Image</h3>
          
          {!uploadedImage ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-12 text-center">
              <FileImage className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mb-4" />
              <div className="text-sm text-gray-600 mb-4">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="mt-2 block text-sm font-medium text-gray-900">
                    Click to upload or drag and drop
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    PNG, JPG, DICOM up to 10MB
                  </span>
                </label>
                <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  className="sr-only" 
                  accept=".png,.jpg,.jpeg,.dcm"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded X-Ray" 
                  className="w-full h-48 sm:h-64 object-contain bg-black rounded-lg"
                />
                <button className="absolute top-2 right-2 bg-white p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-50">
                  <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button 
                  onClick={runAIAnalysis}
                  disabled={isAnalyzing}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4" />
                      <span>Run AI Analysis</span>
                    </>
                  )}
                </button>
                
                <button 
                  onClick={() => setUploadedImage(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Analysis Results Section */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">AI Analysis Results</h3>
          
          {!analysisResult ? (
            <div className="text-center py-8 sm:py-12">
              <Brain className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 text-sm sm:text-base">Upload an X-Ray image to begin AI analysis</p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {/* Confidence Score */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium text-gray-600">AI Confidence Score</span>
                  <span className="text-base sm:text-lg font-bold text-blue-600">{analysisResult.confidence}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${analysisResult.confidence}%` }}
                  ></div>
                </div>
              </div>

              {/* Findings */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Key Findings</h4>
                <div className="space-y-3">
                  {analysisResult.findings.map((finding: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 capitalize text-sm sm:text-base">{finding.type}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(finding.severity)}`}>
                          {finding.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Location: {finding.location}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Probability: {(finding.probability * 100).toFixed(1)}%</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div className={`rounded-lg p-3 sm:p-4 ${
                analysisResult.riskLevel === 'high' ? 'bg-red-50 border border-red-200' :
                analysisResult.riskLevel === 'medium' ? 'bg-yellow-50 border border-yellow-200' :
                'bg-green-50 border border-green-200'
              }`}>
                <div className="flex items-start space-x-3">
                  {analysisResult.riskLevel === 'high' ? (
                    <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Recommendation</h4>
                    <p className="text-xs sm:text-sm text-gray-700">{analysisResult.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
