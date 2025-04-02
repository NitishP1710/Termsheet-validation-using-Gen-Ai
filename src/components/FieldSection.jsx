import React from 'react';
import { Check } from 'lucide-react';

const FieldSection = ({ section, selectedFields, onFieldToggle }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-4 border-b border-gray-100">
        {section.title}
      </h3>
      <div className="grid gap-4">
        {section.fields.map((field) => {
          const isSelected = selectedFields.includes(field.id);
          return (
            <div
              key={field.id}
              onClick={() => onFieldToggle(field.id)}
              className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                isSelected ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                }`}
              >
                {isSelected && <Check className="w-4 h-4 text-white" />}
              </div>
              <span
                className={`flex-1 text-base ${
                  isSelected ? 'text-blue-900 font-medium' : 'text-gray-700'
                }`}
              >
                {field.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FieldSection;