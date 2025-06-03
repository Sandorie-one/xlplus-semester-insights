
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, Target, Brain } from 'lucide-react';

const RecommendationsSection = () => {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      icon: Target,
      title: 'Targeted Review for Key Concepts',
      description: 'Students showing mastery below 65% need foundational review to build confidence.',
      action: 'Update next lecture',
      visible: true
    },
    {
      id: 2,
      icon: Brain,
      title: 'Challenging Question Practice',
      description: 'Low scores on higher-order thinking questions indicate need for more practice.',
      action: 'Assign homework',
      visible: true
    }
  ]);

  const dismissRecommendation = (id: number) => {
    setRecommendations(prev => 
      prev.map(rec => rec.id === id ? { ...rec, visible: false } : rec)
    );
  };

  const visibleRecommendations = recommendations.filter(rec => rec.visible);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Recommendations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visibleRecommendations.map((rec) => {
          const IconComponent = rec.icon;
          return (
            <Card key={rec.id} className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  </div>
                  <button
                    onClick={() => dismissRecommendation(rec.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {rec.description}
                </p>
                
                <Button className="w-full flex items-center justify-center gap-2">
                  {rec.action}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendationsSection;
