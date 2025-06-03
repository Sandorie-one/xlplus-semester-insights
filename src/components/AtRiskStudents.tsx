
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle, Clock } from 'lucide-react';

const AtRiskStudents = () => {
  const atRiskStudents = [
    { 
      initials: 'GW', 
      name: 'Garrett Williamson', 
      status: 'Failed last exam', 
      color: 'bg-red-500',
      icon: AlertTriangle,
      severity: 'critical',
      lastActivity: '3 days ago'
    },
    { 
      initials: 'BC', 
      name: 'Belinda Cruickshank', 
      status: 'Failed last exam', 
      color: 'bg-red-400',
      icon: AlertTriangle,
      severity: 'critical',
      lastActivity: '1 day ago'
    },
    { 
      initials: 'OG', 
      name: 'Olivia Glover', 
      status: "Didn't finish last exam", 
      color: 'bg-orange-500',
      icon: Clock,
      severity: 'warning',
      lastActivity: '2 days ago'
    }
  ];

  return (
    <Card className="bg-dashboard-card border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            At-Risk Students
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {atRiskStudents.map((student, index) => {
            const IconComponent = student.icon;
            return (
              <div key={index} className="group p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className={`${student.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-105 transition-transform duration-200`}>
                    {student.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-semibold text-gray-900 text-sm">{student.name}</div>
                      <div className={`p-1 rounded ${
                        student.severity === 'critical' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                        <IconComponent className="h-3 w-3" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mb-1">{student.status}</div>
                    <div className="text-xs text-gray-500">Last activity: {student.lastActivity}</div>
                  </div>
                  <button className="text-gray-400 hover:text-dashboard-secondary transition-colors duration-200 p-2 hover:bg-white rounded-full">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800 leading-relaxed">
            <span className="font-semibold">📧 Quick Action:</span> Send personalized support messages to help these students get back on track.
          </p>
        </div>
        
        <div className="flex justify-start pt-2">
          <Button className="bg-dashboard-secondary text-white hover:bg-dashboard-secondary/90 border-0 px-6 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            Send Support Messages
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AtRiskStudents;
