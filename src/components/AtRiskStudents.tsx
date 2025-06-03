
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const AtRiskStudents = () => {
  const atRiskStudents = [
    { initials: 'GW', name: 'Garrett Williamson', status: 'Failed last exam', color: 'bg-orange-500' },
    { initials: 'BC', name: 'Belinda Cruickshank', status: 'Failed last exam', color: 'bg-gray-500' },
    { initials: 'OG', name: 'Olivia Glover', status: "Didn't finish last exam", color: 'bg-gray-400' }
  ];

  return (
    <Card className="bg-dashboard-card border border-gray-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          ⚠️ At-risk students
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          {atRiskStudents.map((student, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`${student.color} w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium`}>
                {student.initials}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 text-sm">{student.name}</div>
                <div className="text-xs text-gray-600">{student.status}</div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        
        <Button className="w-full bg-dashboard-secondary text-white hover:bg-dashboard-secondary/90 border-0">
          Email all at-risk students
        </Button>
      </CardContent>
    </Card>
  );
};

export default AtRiskStudents;
