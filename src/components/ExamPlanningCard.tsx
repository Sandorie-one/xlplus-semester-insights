
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ExamPlanningCard = () => {
  const examData = [
    { name: 'Risk Analysis', value: 50, color: '#374151' },
    { name: 'Contribution Margin', value: 20, color: '#6b7280' },
    { name: 'Variance Analysis', value: 20, color: '#9ca3af' },
    { name: 'Gantt Classifications', value: 10, color: '#d1d5db' }
  ];

  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          📊 Exam Planning
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Right now, this is your next exam's topic coverage distribution:
        </p>
        
        <div className="flex items-center gap-6 mb-4">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={examData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {examData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full" />
              <span>50% Risk Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full" />
              <span>20% Contribution Margin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full" />
              <span>20% Variance Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full" />
              <span>10% Gantt Classifications</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mb-4">
          Consider reducing Risk Analysis to <strong>35%</strong>, based on coverage in the course so far.
        </p>
        
        <Button variant="outline" className="w-full text-gray-700 border-gray-300">
          Modify exam
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExamPlanningCard;
