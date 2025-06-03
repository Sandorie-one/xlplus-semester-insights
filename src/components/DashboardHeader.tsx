
import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Good Morning, Owen
        </h1>
        <p className="text-sm text-gray-600">
          Focus on the areas that need your attention.
        </p>
      </div>
      <div className="bg-white border border-gray-300 px-3 py-1 rounded text-sm text-gray-600">
        📅 Week 9 of 15
      </div>
    </div>
  );
};

export default DashboardHeader;
