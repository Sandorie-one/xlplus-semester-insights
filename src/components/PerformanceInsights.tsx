
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const PerformanceInsights = () => {
  const performanceMetrics = [
    { label: 'Below target grades', percentage: 26, count: '8/30', color: 'text-red-600', bgColor: 'bg-red-100' },
    { label: 'Inactive', percentage: 3, count: '1/30', color: 'text-orange-600', bgColor: 'bg-orange-100' },
    { label: 'Engaged in course', percentage: 77, count: '23/30', color: 'text-green-600', bgColor: 'bg-green-100' }
  ];

  const assignmentData = [
    { name: 'A1', score: 72 },
    { name: 'A2', score: 68 },
    { name: 'A3', score: 43 },
    { name: 'A4', score: 77 },
    { name: 'A5', score: 65 },
    { name: 'A6', score: 58 },
    { name: 'A7', score: 71 },
    { name: 'A8', score: 69 }
  ];

  const studentAvatars = [
    { initials: 'JD', color: 'bg-blue-500' },
    { initials: 'SA', color: 'bg-green-500' },
    { initials: 'MK', color: 'bg-purple-500' },
    { initials: 'LB', color: 'bg-pink-500' },
    { initials: 'RC', color: 'bg-indigo-500' },
    { initials: 'TH', color: 'bg-yellow-500' },
    { initials: 'NP', color: 'bg-red-500' },
    { initials: 'DW', color: 'bg-gray-500' }
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          Performance Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className={`${metric.bgColor} rounded-lg p-4 text-center`}>
              <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                {metric.percentage}%
              </div>
              <div className="text-sm text-gray-600 mb-1">
                {metric.count} students
              </div>
              <div className="text-xs text-gray-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Student Avatars */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Student Overview</h4>
          <div className="flex flex-wrap gap-2">
            {studentAvatars.map((student, index) => (
              <div 
                key={index}
                className={`${student.color} w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium`}
              >
                {student.initials}
              </div>
            ))}
          </div>
        </div>

        {/* Assignment Scores Chart */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Avg. Assignment Scores</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={assignmentData}>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Score']}
                  labelFormatter={(label) => `Assignment ${label}`}
                />
                <Bar 
                  dataKey="score" 
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceInsights;
