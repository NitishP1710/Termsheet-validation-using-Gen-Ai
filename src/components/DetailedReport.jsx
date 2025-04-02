import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';

function DetailedReport({ sections }) {
  const [expandedSection, setExpandedSection] = React.useState(null);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'valid':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Detailed Validation Report</h2>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              >
                <div className="flex items-center space-x-3">
                  {getStatusIcon(section.status)}
                  <span className="font-medium text-gray-900">{section.title}</span>
                </div>
                {expandedSection === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {expandedSection === index && (
                <div className="px-4 pb-4">
                  {section.fields.map((field, fieldIndex) => (
                    <div key={fieldIndex} className="mt-3 first:mt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(field.status)}
                          <span className="text-sm font-medium text-gray-900">{field.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{field.value}</span>
                      </div>
                      {field.message && (
                        <p className="mt-1 text-sm text-gray-500 ml-7">{field.message}</p>
                      )}
                      {field.suggestion && (
                        <p className="mt-1 text-sm text-blue-600 ml-7">💡 {field.suggestion}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailedReport;