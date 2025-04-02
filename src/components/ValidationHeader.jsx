import React from 'react';
import { FileText, RefreshCcw, Download, Share2 } from 'lucide-react';

function ValidationHeader({ document, timestamp, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'valid': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'valid': return 'Valid';
      case 'warning': return 'Warnings Found';
      case 'error': return 'Errors Detected';
      default: return 'Processing';
    }
  };

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">{document}</h1>
              <p className="text-sm text-gray-500">Last Processed: {timestamp}</p>
            </div>
            <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
              {getStatusText(status)}
            </span>
          </div>
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <RefreshCcw className="h-4 w-4 mr-2" />
              Reprocess
            </button>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </button>
            <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <Share2 className="h-4 w-4 mr-2" />
              Export to API
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidationHeader;