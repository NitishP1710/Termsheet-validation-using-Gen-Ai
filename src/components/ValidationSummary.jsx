import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

function ValidationSummary({ stats }) {
  const { passed, warnings, errors, total } = stats;
  const percentage = Math.round((passed / total) * 100);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Validation Summary</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-full">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{passed}/{total} Passed</p>
            <p className="text-sm text-gray-500">Valid fields</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-yellow-100 rounded-full">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{warnings} Warnings</p>
            <p className="text-sm text-gray-500">Need review</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-100 rounded-full">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{errors} Errors</p>
            <p className="text-sm text-gray-500">Critical issues</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                Validation Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {percentage}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidationSummary;