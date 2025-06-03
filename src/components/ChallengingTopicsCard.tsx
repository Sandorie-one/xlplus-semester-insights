
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChallengingTopicsCard = () => {
  return (
    <Card className="bg-dashboard-card border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <span className="text-2xl">📈</span>
          <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Challenging Topics
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-lg">⚠️</span>
              <div>
                <p className="text-sm font-semibold text-red-800 mb-1">Budgeting Challenges</p>
                <p className="text-sm text-red-700">
                  Consistent pain point for students across multiple semesters
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
            <div className="flex items-start gap-2">
              <span className="text-orange-500 font-bold text-lg">📊</span>
              <div>
                <p className="text-sm font-semibold text-orange-800 mb-1">Cost Driver Selection</p>
                <p className="text-sm text-orange-700">
                  <span className="font-bold bg-orange-100 px-2 py-1 rounded text-orange-900">35%</span> of students struggling this semester
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 leading-relaxed">
            <span className="font-semibold">💡 Action Item:</span> Create targeted study materials focusing on these challenging concepts to improve student outcomes.
          </p>
        </div>
        
        <div className="flex justify-start pt-2">
          <Button className="bg-dashboard-secondary text-white hover:bg-dashboard-secondary/90 border-0 px-6 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            Create Study Materials
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengingTopicsCard;
