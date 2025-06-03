
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import ExamPlanningCard from '../components/ExamPlanningCard';
import ChallengingTopicsCard from '../components/ChallengingTopicsCard';
import RecommendationsSection from '../components/RecommendationsSection';
import PerformanceInsights from '../components/PerformanceInsights';
import AtRiskStudents from '../components/AtRiskStudents';

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <DashboardHeader />
        
        {/* Exam and Topics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExamPlanningCard />
          <ChallengingTopicsCard />
        </div>
        
        {/* Recommendations Section */}
        <RecommendationsSection />
        
        {/* Performance Insights and At-risk Students Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceInsights />
          </div>
          <div>
            <AtRiskStudents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
