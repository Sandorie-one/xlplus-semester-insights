
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

const RecommendationsSection = () => {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      title: 'Targeted Review for Key Concepts:',
      description: 'Students struggled most with memory encoding and attention models, with mastery rates below 65%, indicating a need for stronger foundational review.',
      action: 'Update next lecture',
      visible: true
    },
    {
      id: 2,
      title: 'Challenging Question Practice:',
      description: 'Questions requiring higher-order thinking (e.g., analysis and application) had the lowest scores— especially short answers on attention theory.',
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
      <h2 className="text-lg font-semibold text-gray-900">Recommendations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visibleRecommendations.map((rec) => (
          <Card key={rec.id} className="bg-dashboard-card border border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-dashboard-item p-1 rounded">
                    <div className="w-4 h-4 bg-gray-400 rounded" />
                  </div>
                  <span className="font-medium text-gray-900 text-sm">{rec.title}</span>
                </div>
                <button
                  onClick={() => dismissRecommendation(rec.id)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                {rec.description}
              </p>
              
              <div className="flex justify-start">
                <Button className="flex items-center gap-2 bg-dashboard-secondary text-white hover:bg-dashboard-secondary/90 border-0">
                  {rec.action}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsSection;
