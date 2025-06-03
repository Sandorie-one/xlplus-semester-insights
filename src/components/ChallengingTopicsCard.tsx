
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const ChallengingTopicsCard = () => {
  const challengingTopics = [
    'Budgeting',
    'Cost driver selection'
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
          <BookOpen className="h-5 w-5 text-blue-600" />
          Challenging Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Based on past assessments, students are struggling with:
          </p>
          <div className="space-y-3">
            {challengingTopics.map((topic, index) => (
              <div 
                key={index}
                className="bg-red-50 border border-red-200 rounded-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="font-medium text-red-900">{topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Assign Structured Study
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChallengingTopicsCard;
