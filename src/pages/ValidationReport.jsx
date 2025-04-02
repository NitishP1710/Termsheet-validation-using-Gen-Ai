import React from 'react';
import ValidationHeader from '../components/ValidationHeader';
import TermSheetPreview from '../components/TermSheetPreview';
import ValidationSummary from '../components/ValidationSummary';
import DetailedReport from '../components/DetailedReport';

// Mock data for demonstration
const mockData = {
  document: {
    name: "Investment_Term_Sheet_Q1_2025.pdf",
    timestamp: "March 31, 2025, 10:15 AM",
    status: "warning"
  },
  previewData: [
    { field: "Investment Amount", value: "$5,000,000", status: "valid" },
    { field: "Pre-Money Valuation", value: "$18,000,000", status: "error" },
    { field: "Post-Money Valuation", value: "$23,000,000", status: "error" },
    { field: "Equity Stake", value: "20%", status: "valid" },
    { field: "Voting Rights", value: "Majority Vote Required", status: "warning" }
  ],
  stats: {
    passed: 15,
    warnings: 3,
    errors: 2,
    total: 20
  },
  sections: [
    {
      title: "Investment Details",
      status: "error",
      fields: [
        {
          name: "Investment Amount",
          value: "$5,000,000",
          status: "valid"
        },
        {
          name: "Pre-Money Valuation",
          value: "$18,000,000",
          status: "error",
          message: "Mismatch with expected value of $20,000,000",
          suggestion: "Recalculate valuation based on updated pre-money value"
        }
      ]
    },
    {
      title: "Equity & Ownership",
      status: "warning",
      fields: [
        {
          name: "Equity Stake",
          value: "20%",
          status: "valid"
        },
        {
          name: "Voting Rights",
          value: "Unclear Terms",
          status: "warning",
          message: "Clause missing in term sheet",
          suggestion: "Add specific voting rights clause"
        }
      ]
    }
  ]
};

function ValidationReport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ValidationHeader
        document={mockData.document.name}
        timestamp={mockData.document.timestamp}
        status={mockData.document.status}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="space-y-8">
            <TermSheetPreview data={mockData.previewData} />
          </div>
          
          {/* Right Panel */}
          <div className="space-y-8">
            <ValidationSummary stats={mockData.stats} />
            <DetailedReport sections={mockData.sections} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidationReport;