import React, { useState } from 'react';
import {
  Save,
  Upload,
  Download,
  CheckSquare,
  Square,
  ChevronDown,
  ChevronUp,
  Plus,
} from 'lucide-react';

function CustomizeTemplate() {
  const [sections, setSections] = useState([
    {
      id: 'enterprise',
      title: 'Enterprise Information',
      isExpanded: true,
      fields: [
        { id: 'date', name: 'Transaction Date', selected: true },
        { id: 'amount', name: 'Total Transaction Amount', selected: true },
        { id: 'companyName', name: 'Company Name', selected: true },
        { id: 'contactInfo', name: 'Contact Information', selected: true },
        { id: 'email', name: 'Email Address', selected: true },
        { id: 'phone', name: 'Phone Number', selected: true },
        { id: 'address', name: 'Company Address', selected: true },
      ],
    },
    {
      id: 'transaction',
      title: 'Transaction Details',
      isExpanded: false,
      fields: [
        { id: 'business', name: 'Business Description', selected: false },
        { id: 'promoters', name: 'Promoter(s)', selected: false },
        { id: 'currentShares', name: 'Current Shareholding Structure', selected: false },
        { id: 'investmentType', name: 'Type of Investment', selected: false },
      ],
    },
    {
      id: 'investment',
      title: 'Investment Terms',
      isExpanded: false,
      fields: [
        { id: 'amount', name: 'Investment Amount', selected: false },
        { id: 'valuation', name: 'Valuation of the Company', selected: false },
        { id: 'payment', name: 'Payment Terms', selected: false },
        { id: 'funds', name: 'Use of Funds', selected: false },
      ],
    },
    {
      id: 'shareholding',
      title: 'Shareholding Structure',
      isExpanded: false,
      fields: [
        { id: 'postInvestment', name: 'Post-Investment Shareholding (%)', selected: false },
        { id: 'distribution', name: 'Equity Distribution', selected: false },
        { id: 'lockIn', name: 'Lock-in Period', selected: false },
      ],
    },
    {
      id: 'governance',
      title: 'Governance & Voting Rights',
      isExpanded: false,
      fields: [
        { id: 'board', name: 'Board Representation', selected: false },
        { id: 'veto', name: 'Veto Rights', selected: false },
        { id: 'reserved', name: 'Reserved Matters', selected: false },
      ],
    },
    {
      id: 'exit',
      title: 'Exit Terms',
      isExpanded: false,
      fields: [
        { id: 'mechanism', name: 'Exit Mechanism', selected: false },
        { id: 'holding', name: 'Minimum Holding Period', selected: false },
        { id: 'rights', name: 'Drag-along & Tag-along Rights', selected: false },
      ],
    },
    {
      id: 'compliance',
      title: 'Compliance & Miscellaneous',
      isExpanded: false,
      fields: [
        { id: 'approvals', name: 'Regulatory Approvals Required', selected: false },
        { id: 'confidentiality', name: 'Confidentiality Clauses', selected: false },
        { id: 'dispute', name: 'Dispute Resolution Mechanism', selected: false },
      ],
    },
  ]);

  const [newFieldName, setNewFieldName] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [showAddField, setShowAddField] = useState(false);

  const toggleField = (sectionId, fieldId) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          fields: section.fields.map(field => 
            field.id === fieldId ? { ...field, selected: !field.selected } : field
          ),
        };
      }
      return section;
    }));
  };

  const toggleSection = (sectionId) => {
    setSections(sections.map(section => 
      section.id === sectionId ? { ...section, isExpanded: !section.isExpanded } : section
    ));
  };

  const getSelectedFieldsCount = () => {
    return sections.reduce((total, section) => 
      total + section.fields.filter(field => field.selected).length, 0
    );
  };

  const addCustomField = () => {
    if (newFieldName.trim() && selectedSection) {
      setSections(sections.map(section => {
        if (section.id === selectedSection) {
          return {
            ...section,
            fields: [
              ...section.fields,
              {
                id: `custom-${Date.now()}`,
                name: newFieldName.trim(),
                selected: true,
              },
            ],
          };
        }
        return section;
      }));
      setNewFieldName('');
      setShowAddField(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Term Sheet Validation Template
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Select and organize fields to create your custom validation template
              </p>
            </div>
            <div className="flex gap-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Upload className="h-4 w-4 mr-2" />
                Load Template
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                <Save className="h-4 w-4 mr-2" />
                Save Template
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  Field Selection
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    {getSelectedFieldsCount()} fields selected
                  </span>
                  <button
                    onClick={() => setShowAddField(true)}
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Custom Field
                  </button>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Choose the fields you want to include in your template
              </p>
            </div>

            {showAddField && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Add Custom Field</h3>
                <div className="flex gap-4">
                  <select
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    className="block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">Select Section</option>
                    {sections.map((section) => (
                      <option key={section.id} value={section.id}>
                        {section.title}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={newFieldName}
                    onChange={(e) => setNewFieldName(e.target.value)}
                    placeholder="Enter field name"
                    className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <button
                    onClick={addCustomField}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Add Field
                  </button>
                  <button
                    onClick={() => setShowAddField(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {section.title}
                    </span>
                    {section.isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {section.isExpanded && (
                    <div className="px-4 py-3 space-y-3">
                      {section.fields.map((field) => (
                        <div
                          key={field.id}
                          className="flex items-center space-x-3 text-sm"
                        >
                          <button
                            onClick={() => toggleField(section.id, field.id)}
                            className="text-gray-500 hover:text-indigo-600"
                          >
                            {field.selected ? (
                              <CheckSquare className="h-5 w-5" />
                            ) : (
                              <Square className="h-5 w-5" />
                            )}
                          </button>
                          <span className={field.selected ? 'text-indigo-600 font-medium' : 'text-gray-700'}>
                            {field.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Reset Template
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Save & Apply Template
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CustomizeTemplate;