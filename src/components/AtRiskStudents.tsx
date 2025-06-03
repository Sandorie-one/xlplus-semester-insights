
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, RefreshCw } from 'lucide-react';

const AtRiskStudents = () => {
  const atRiskStudents = [
    { initials: 'GW', name: 'George Washington', status: 'Failed last exam', color: 'bg-red-500' },
    { initials: 'BC', name: 'Benjamin Carter', status: "Didn't finish last exam", color: 'bg-orange-500' },
    { initials: 'OG', name: 'Olivia Garcia', status: 'Failed last exam', color: 'bg-red-500' }
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          At-risk Students
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6">
          {atRiskStudents.map((student, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className={`${student.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium`}>
                {student.initials}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{student.name}</div>
                <div className="text-sm text-gray-600">{student.status}</div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        
        <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700">
          <Mail className="h-4 w-4" />
          Email all at-risk students
        </Button>
      </CardContent>
    </Card>
  );
};

export default AtRiskStudents;
