
import React from 'react';

const DashboardHeader = () => {
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {getCurrentGreeting()}, Owen
      </h1>
      <p className="text-lg text-gray-600">
        Focus on the areas that need your attention
      </p>
    </div>
  );
};

export default DashboardHeader;
