import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  Upload,
  FileText,
  FileSpreadsheet,
  FileImage,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Download,
  Share2
} from 'lucide-react';

function Uploadpage() {
  const [fileStatus, setFileStatus] = useState('idle');
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files?.length) {
      Array.from(files).forEach((file) => handleFile(file));
    }
  };

  const handleFile = (file) => {
    setFileStatus('uploading');
    // Simulate file processing
    setTimeout(() => {
      setFileStatus('processing');
      setTimeout(() => {
        setFileStatus('complete');
      }, 2000);
    }, 1500);
  };

  const handleTemplateChange = (e) => {
    const selectedTemplate = e.target.value;
    if (selectedTemplate === 'investment') {
      navigate('/customizetemplate'); // Navigate to CustomizeTemplate component
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">Term Sheet Validator</span>
            </div>
            {/* Dropdown for Template Selection */}
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                defaultValue="customize"
                onChange={handleTemplateChange} // Add onChange handler
              >
                <option value="customize" disabled>
                  Customize Term Sheet
                </option>
                <option value="investment">Investment Term Sheet</option>
                <option value="merger">Merger and Acquisition</option>
                <option value="loan">Loan and Debt</option>
                <option value="real-estate">Real Estate</option>
                <option value="joint-venture">Joint Venture</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Term Sheet Validation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your term sheet and let our AI extract, structure, and validate the data automatically.
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-3xl mx-auto">
          <div
            className={`border-2 border-dashed rounded-lg p-12 transition-all duration-200 ease-in-out ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-blue-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <Upload
                className={`mx-auto h-12 w-12 ${
                  dragActive ? "text-blue-500" : "text-gray-400"
                }`}
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Drag and drop your term sheet
              </h3>
              <p className="mt-2 text-gray-500">or</p>
              <label className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                Browse Files
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.docx,.xlsx,.png,.jpg"
                  multiple // Allow multiple file selection
                  onChange={(e) => {
                    if (e.target.files?.length) {
                      Array.from(e.target.files).forEach((file) => handleFile(file));
                    }
                  }}
                />
              </label>
              <p className="mt-4 text-sm text-gray-500">
                Supported formats: PDF, DOCX, XLSX, PNG, JPG
              </p>
            </div>

            {/* File Type Icons */}
            <div className="flex justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="p-3 bg-red-50 rounded-lg">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <span className="text-xs text-gray-500 mt-1 block">PDF</span>
              </div>
              <div className="text-center">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-xs text-gray-500 mt-1 block">DOCX</span>
              </div>
              <div className="text-center">
                <div className="p-3 bg-green-50 rounded-lg">
                  <FileSpreadsheet className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-xs text-gray-500 mt-1 block">XLSX</span>
              </div>
              <div className="text-center">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <FileImage className="h-6 w-6 text-purple-600" />
                </div>
                <span className="text-xs text-gray-500 mt-1 block">Image</span>
              </div>
            </div>
          </div>

          {/* Processing Status */}
          {fileStatus !== 'idle' && (
            <div className="mt-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {fileStatus === 'complete' ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : fileStatus === 'error' ? (
                      <AlertCircle className="h-6 w-6 text-red-500" />
                    ) : (
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent" />
                    )}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {fileStatus === 'uploading' && 'Uploading document...'}
                        {fileStatus === 'processing' && 'Processing term sheet...'}
                        {fileStatus === 'complete' && 'Processing complete!'}
                        {fileStatus === 'error' && 'Error processing document'}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {fileStatus === 'complete'
                          ? 'Your term sheet has been processed successfully.'
                          : fileStatus === 'error'
                          ? 'Please try uploading again.'
                          : 'This may take a few moments.'}
                      </p>
                    </div>
                  </div>
                  {fileStatus === 'complete' && (
                    <div className="flex space-x-4">
                      <button
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                        onClick={() => navigate('/validation-report')} // Navigate to /validation-report
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Report
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </button>
                    </div>
                  )}
                  {(fileStatus === 'uploading' || fileStatus === 'processing') && (
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 transition-all duration-500 ease-in-out"
                        style={{
                          width: fileStatus === 'uploading' ? '30%' : '70%',
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Extraction',
                description: 'Advanced OCR and NLP to extract key terms automatically',
                icon: <FileText className="h-6 w-6 text-blue-500" />,
              },
              {
                title: 'Smart Validation',
                description: 'Automated checks for completeness and consistency',
                icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
              },
              {
                title: 'Instant Reports',
                description: 'Generate structured reports in multiple formats',
                icon: <Download className="h-6 w-6 text-blue-500" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-3 bg-blue-50 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                <button className="mt-4 inline-flex items-center text-sm text-blue-600 hover:text-blue-700">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Uploadpage;