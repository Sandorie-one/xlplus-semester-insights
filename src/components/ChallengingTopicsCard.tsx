
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChallengingTopicsCard = () => {
  return (
    <Card className="bg-dashboard-card border border-gray-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          📈 Challenging Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-3">
            <strong>Budgeting</strong> has been a pain point for students in past semesters.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Cost driver selection</strong> is a struggle for 35% of students this semester, based on student assessment surveys.
          </p>
          <p className="text-sm text-gray-700">
            Create study materials for your students that focus these topics.
          </p>
        </div>
        
        <Button className="w-full bg-dashboard-secondary text-white hover:bg-dashboard-secondary/90 border-0">
          Assign Structured Study
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChallengingTopicsCard;
