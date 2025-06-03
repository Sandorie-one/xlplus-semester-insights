
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const PerformanceInsights = () => {
  const assignmentData = [
    { name: 'A1', score: 47, trend: 'down' },
    { name: 'A2', score: 23, trend: 'down' },
    { name: 'A3', score: 43, trend: 'up' },
    { name: 'A4', score: 77, trend: 'up' },
    { name: 'A5', score: 60, trend: 'down' },
    { name: 'A6', score: 51, trend: 'down' },
    { name: 'A7', score: 73, trend: 'up' },
    { name: 'A8', score: 69, trend: 'down' }
  ];

  const getBarColor = (score: number) => {
    if (score >= 70) return '#10b981'; // green
    if (score >= 50) return '#f59e0b'; // orange
    return '#ef4444'; // red
  };

  return (
    <Card className="bg-dashboard-card border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <span className="text-2xl">📊</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Performance Analytics
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Performance Metrics */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="relative w-20 h-20 mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeDasharray="26, 100"
                  className="animate-pulse"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-red-600">26%</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-700">Below Target</div>
            <div className="text-xs text-gray-500 bg-red-50 px-2 py-1 rounded-full mt-1">8 of 30 Students</div>
          </div>

          <div className="text-center group">
            <div className="relative w-20 h-20 mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeDasharray="3, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-orange-600">3%</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-700">Inactive</div>
            <div className="text-xs text-gray-500 bg-orange-50 px-2 py-1 rounded-full mt-1">1 of 30 Students</div>
          </div>

          <div className="text-center group">
            <div className="relative w-20 h-20 mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="77, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">77%</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-700">Highly Engaged</div>
            <div className="text-xs text-gray-500 bg-green-50 px-2 py-1 rounded-full mt-1">23 of 30 Students</div>
          </div>
        </div>

        {/* Assignment Scores Chart */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-gray-800">Assignment Performance Trends</h4>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-gray-600">≥70% Excellent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                <span className="text-gray-600">50-69% Good</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-gray-600">&lt;50% Needs Work</span>
              </div>
            </div>
          </div>
          
          <div className="h-56 bg-gray-50 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={assignmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 'bold' }}
                />
                <YAxis 
                  domain={[0, 100]} 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                />
                <Bar 
                  dataKey="score" 
                  radius={[4, 4, 0, 0]}
                  fill={(entry) => getBarColor(entry.score)}
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
