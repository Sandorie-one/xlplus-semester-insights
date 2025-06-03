
import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-start mb-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">
          Good Morning, Owen
        </h1>
        <p className="text-base text-gray-600 font-medium">
          Focus on the areas that need your attention.
        </p>
      </div>
      <div className="bg-dashboard-item border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium shadow-sm">
        <span className="text-lg mr-2">📅</span>
        Week 9 of 15
      </div>
    </div>
  );
};

export default DashboardHeader;
