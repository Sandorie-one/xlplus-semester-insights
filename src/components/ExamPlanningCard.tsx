
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const ExamPlanningCard = () => {
  const examData = [
    { name: 'Risk Analysis', value: 50, color: '#ef4444' },
    { name: 'Contribution Margin', value: 20, color: '#3b82f6' },
    { name: 'Variance Analysis', value: 20, color: '#10b981' },
    { name: 'Gantt Classifications', value: 10, color: '#f59e0b' }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          Exam Planning
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={examData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${value}%`}
              >
                {examData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-2 mb-4">
          {examData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">{item.name}</span>
              <span className="text-sm font-medium text-gray-900">{item.value}%</span>
            </div>
          ))}
        </div>
        
        <div className="bg-amber-50 p-3 rounded-lg mb-4">
          <p className="text-sm text-amber-800">
            <strong>Recommendation:</strong> Consider reducing "Risk Analysis" coverage to 35% to allow more focus on other topics.
          </p>
        </div>
        
        <Button className="w-full">
          Modify Exam
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExamPlanningCard;
