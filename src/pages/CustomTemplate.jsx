import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import TermSheetSelector from '../components/TermsheetSelector';
import FieldSection from '../components/FieldSection';

const termSheetTypes = [
  {
    id: 'ma',
    name: 'M&A Term Sheet',
    description: 'Customize merger and acquisition agreement templates',
    sections: [
      {
        title: 'Transaction Overview',
        fields: [
          { id: 'company_names', label: 'Company Names (Acquirer & Target)' },
          { id: 'deal_type', label: 'Deal Type (Merger, Acquisition, Asset Sale, Stock Sale)' },
          { id: 'purchase_price', label: 'Purchase Price & Payment Terms' },
          { id: 'due_diligence', label: 'Due Diligence Period' },
        ],
      },
      {
        title: 'Financial Terms',
        fields: [
          { id: 'earn_out', label: 'Earn-Out Provisions' },
          { id: 'escrow', label: 'Escrow Amount & Holdback Period' },
          { id: 'liabilities', label: 'Assumed Liabilities' },
          { id: 'working_capital', label: 'Working Capital Adjustments' },
        ],
      },
    ],
  },
  {
    id: 'loan',
    name: 'Loan & Debt Term Sheet',
    description: 'Structure and validate loan agreements',
    sections: [
      {
        title: 'Loan Details',
        fields: [
          { id: 'loan_amount', label: 'Loan Amount & Currency' },
          { id: 'interest_rate', label: 'Interest Rate Type (Fixed/Floating)' },
          { id: 'loan_term', label: 'Loan Term & Repayment Schedule' },
        ],
      },
    ],
  },
  {
    id: 'realestate',
    name: 'Real Estate Term Sheet',
    description: 'Customize property transaction templates',
    sections: [
      {
        title: 'Property & Transaction Details',
        fields: [
          { id: 'property_address', label: 'Property Address & Type' },
          { id: 'purchase_price', label: 'Purchase Price or Lease Amount' },
          { id: 'payment_structure', label: 'Payment Structure' },
        ],
      },
    ],
  },
  {
    id: 'jv',
    name: 'Joint Venture Term Sheet',
    description: 'Create joint venture agreement templates',
    sections: [
      {
        title: 'General JV Details',
        fields: [
          { id: 'participating_companies', label: 'Name of Participating Companies' },
          { id: 'business_purpose', label: 'Business Purpose & Scope of JV' },
          { id: 'jv_duration', label: 'JV Duration & Termination Criteria' },
        ],
      },
    ],
  },
];

const CustomTemplate = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedFields, setSelectedFields] = useState([]);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedFields([]);
  };

  const handleFieldToggle = (fieldId) => {
    setSelectedFields((prev) =>
      prev.includes(fieldId)
        ? prev.filter((id) => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  const selectedTermSheet = termSheetTypes.find((type) => type.id === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Term Sheet Builder
              </h1>
              <p className="mt-1 text-gray-500">
                Customize your legal document template
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Select Term Sheet Type
          </h2>
          <TermSheetSelector
            selectedType={selectedType}
            onTypeSelect={handleTypeSelect}
          />
        </div>

        {selectedTermSheet && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700">
                Customize Fields
              </h2>
              <span className="text-sm text-gray-500">
                {selectedFields.length} fields selected
              </span>
            </div>

            <div className="space-y-6">
              {selectedTermSheet.sections.map((section) => (
                <FieldSection
                  key={section.title}
                  section={section}
                  selectedFields={selectedFields}
                  onFieldToggle={handleFieldToggle}
                />
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <button
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                onClick={() => {
                  console.log('Selected fields:', selectedFields);
                }}
              >
                Generate Term Sheet
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CustomTemplate;
