
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ExamPlanningCard = () => {
  const examData = [
    { name: 'Risk Analysis', value: 50, color: '#1f2937' },
    { name: 'Contribution Margin', value: 20, color: '#374151' },
    { name: 'Variance Analysis', value: 20, color: '#6b7280' },
    { name: 'Gantt Classifications', value: 10, color: '#9ca3af' }
  ];

  return (
    <Card className="bg-dashboard-card border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <span className="text-2xl">📊</span>
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Exam Planning
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          Current exam topic coverage distribution for your upcoming assessment:
        </p>
        
        <div className="flex items-center gap-8">
          <div className="relative w-36 h-36 group-hover:scale-105 transition-transform duration-300">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={examData}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                  strokeWidth={2}
                  stroke="#ffffff"
                >
                  {examData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-xs text-gray-500 font-medium">Coverage</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 text-sm flex-1">
            {examData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div 
                  className="w-4 h-4 rounded-full shadow-sm" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-medium text-gray-700">
                  {item.value}% {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-800 leading-relaxed">
            <span className="font-semibold">💡 Recommendation:</span> Consider reducing Risk Analysis to{' '}
            <span className="font-bold bg-amber-100 px-2 py-1 rounded text-amber-900">35%</span>{' '}
            based on coverage in the course so far.
          </p>
        </div>
        
        <div className="flex justify-start pt-2">
          <Button className="bg-dashboard-secondary text-white hover:bg-dashboard-secondary/90 border-0 px-6 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            Modify Exam Structure
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamPlanningCard;
