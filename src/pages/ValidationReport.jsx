import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Search, Split } from 'lucide-react';

function ValidationReport() {
  // Mock data with the new structure
  const mockData = {
    document: {
      name: "Investment_Term_Sheet_Q1_2025.pdf",
      timestamp: "March 31, 2025, 10:15 AM"
    },
    validationResults: {
      multipleValueFields: [
        {
          key: "Board Representation",
          values: ["2 Board Seats", "3 Board Seats", "Observer Rights"],
          suggestion: "Clarify the exact board representation terms"
        },
        {
          key: "Vesting Schedule",
          values: ["4 Year Vesting", "3 Year Vesting with 1 Year Cliff"],
          suggestion: "Confirm the intended vesting schedule"
        }
      ],
      mismatchFields: [
        {
          key: "Pre-Money Valuation",
          expectedValue: "$20,000,000",
          foundValue: "$18,000,000",
          suggestion: "Recalculate valuation based on updated pre-money value"
        },
        {
          key: "Post-Money Valuation",
          expectedValue: "$25,000,000",
          foundValue: "$23,000,000",
          suggestion: "Update post-money valuation calculation"
        }
      ],
      validFields: [
        {
          key: "Investment Amount",
          value: "$5,000,000"
        },
        {
          key: "Equity Stake",
          value: "20%"
        }
      ],
      notFoundFields: [
        {
          key: "Board Seats",
          importance: "Critical"
        },
        {
          key: "Liquidation Preference",
          importance: "High"
        }
      ]
    },
    summary: {
      total: 20,
      valid: 15,
      mismatched: 3,
      notFound: 2,
      multipleValues: 2
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Document Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{mockData.document.name}</h1>
              <p className="text-sm text-gray-500">Last Processed: {mockData.document.timestamp}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Multiple Values Fields Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <Split className="h-6 w-6 text-purple-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Multiple Values Detected</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {mockData.validationResults.multipleValueFields.map((field, index) => (
                <div key={index} className="py-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium text-gray-900">{field.key}</h3>
                      <div className="mt-2 space-y-2">
                        {field.values.map((value, vIndex) => (
                          <div key={vIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                            <span className="text-sm text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="text-sm text-gray-500 bg-purple-50 px-3 py-1 rounded-full">
                        {field.suggestion}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mismatch Fields Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Mismatched Fields</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {mockData.validationResults.mismatchFields.map((field, index) => (
                <div key={index} className="py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{field.key}</h3>
                      <div className="mt-1 text-sm text-gray-500">
                        <p>Expected: <span className="text-green-600">{field.expectedValue}</span></p>
                        <p>Found: <span className="text-red-600">{field.foundValue}</span></p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{field.suggestion}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valid Fields Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Valid Fields</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {mockData.validationResults.validFields.map((field, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900">{field.key}</h3>
                  <p className="mt-1 text-sm text-gray-600">{field.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not Found Fields Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <Search className="h-6 w-6 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Not Found Fields</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {mockData.validationResults.notFoundFields.map((field, index) => (
                <div key={index} className="py-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-900">{field.key}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      field.importance === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {field.importance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Summary</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Total Fields</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.summary.total}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Valid</p>
                <p className="text-2xl font-bold text-green-600">{mockData.summary.valid}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Mismatched</p>
                <p className="text-2xl font-bold text-yellow-600">{mockData.summary.mismatched}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Multiple Values</p>
                <p className="text-2xl font-bold text-purple-600">{mockData.summary.multipleValues}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Not Found</p>
                <p className="text-2xl font-bold text-gray-600">{mockData.summary.notFound}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidationReport;