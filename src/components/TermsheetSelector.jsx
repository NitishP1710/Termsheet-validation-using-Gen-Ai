import React from 'react';
import { ChevronRight, FileText, Coins, Building2, Users } from 'lucide-react';
import { termSheetTypes } from '../data/termSheetData';

const getIconForType = (id) => {
  switch (id) {
    case 'ma':
      return FileText;
    case 'loan':
      return Coins;
    case 'realestate':
      return Building2;
    case 'jv':
      return Users;
    default:
      return FileText;
  }
};

const TermSheetSelector = ({ selectedType, onTypeSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {termSheetTypes.map((type) => {
        const Icon = getIconForType(type.id);
        return (
          <button
            key={type.id}
            onClick={() => onTypeSelect(type.id)}
            className={`relative group p-6 rounded-2xl transition-all duration-200 ${
              selectedType === type.id
                ? 'bg-blue-600 text-white shadow-xl scale-102'
                : 'bg-white hover:bg-blue-50 shadow-md hover:shadow-xl'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className={`p-3 rounded-xl w-fit mb-4 ${
                selectedType === type.id
                  ? 'bg-blue-500'
                  : 'bg-blue-50 group-hover:bg-blue-100'
              }`}>
                <Icon className={`w-6 h-6 ${
                  selectedType === type.id
                    ? 'text-white'
                    : 'text-blue-600'
                }`} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                selectedType === type.id
                  ? 'text-white'
                  : 'text-gray-900'
              }`}>
                {type.name}
              </h3>
              <p className={`text-sm mb-4 ${
                selectedType === type.id
                  ? 'text-blue-100'
                  : 'text-gray-500'
              }`}>
                {type.description}
              </p>
              <ChevronRight className={`absolute bottom-4 right-4 w-5 h-5 transition-transform group-hover:translate-x-1 ${
                selectedType === type.id
                  ? 'text-white'
                  : 'text-gray-400'
              }`} />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default TermSheetSelector;
