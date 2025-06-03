
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, TrendingUp, BookOpen } from 'lucide-react';

const RecommendationsSection = () => {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      title: 'Targeted Review for Key Concepts',
      description: 'Students struggled most with memory encoding and attention models, with mastery rates below 65%. This indicates a critical need for stronger foundational review before advancing.',
      action: 'Update Next Lecture',
      visible: true,
      icon: TrendingUp,
      priority: 'high',
      color: 'red'
    },
    {
      id: 2,
      title: 'Advanced Problem-Solving Practice',
      description: 'Questions requiring higher-order thinking (analysis and application) had the lowest scores—especially short answers on attention theory. Students need more practice with complex scenarios.',
      action: 'Assign Practice Set',
      visible: true,
      icon: BookOpen,
      priority: 'medium',
      color: 'orange'
    }
  ]);

  const dismissRecommendation = (id: number) => {
    setRecommendations(prev => 
      prev.map(rec => rec.id === id ? { ...rec, visible: false } : rec)
    );
  };

  const visibleRecommendations = recommendations.filter(rec => rec.visible);

  const getPriorityStyles = (color: string) => {
    const styles = {
      red: 'bg-red-50 border-red-200 text-red-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800'
    };
    return styles[color as keyof typeof styles] || styles.red;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Recommendations</h2>
        <span className="bg-dashboard-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          {visibleRecommendations.length} Active
        </span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {visibleRecommendations.map((rec) => {
          const IconComponent = rec.icon;
          return (
            <Card key={rec.id} className="bg-dashboard-card border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getPriorityStyles(rec.color)}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 text-base block">{rec.title}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full mt-1 inline-block ${
                        rec.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {rec.priority.toUpperCase()} PRIORITY
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => dismissRecommendation(rec.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1 hover:bg-red-50 rounded"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {rec.description}
                </p>
                
                <div className="flex justify-start">
                  <Button className="flex items-center gap-2 bg-dashboard-secondary text-white hover:bg-dashboard-secondary/90 border-0 px-6 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group">
                    {rec.action}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendationsSection;
