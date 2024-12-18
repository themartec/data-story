import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Target } from 'lucide-react';

const DataStory = () => {
  return (
    <div className="space-y-8 w-full max-w-4xl">
      {/* Context Setting Slide */}
      <Card className="bg-white p-6">
        <CardContent>
          <div className="text-2xl font-bold mb-6 text-black">Talent Acquisition Landscape</div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-lg font-semibold text-black">Traditional Investment</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded text-black">
                  <span>ATS Systems</span>
                  <span className="font-bold">$150K/year</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded text-black">
                  <span>Recruiter Salaries (5 FTE)</span>
                  <span className="font-bold">$500K/year</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded text-black">
                  <span>Job Boards</span>
                  <span className="font-bold">$200K/year</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded text-black">
                  <span>Talent Intelligence</span>
                  <span className="font-bold">$100K/year</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-black">
              <div className="text-lg font-semibold">The Martec Investment</div>
              <div className="p-4 bg-green-50 rounded">
                <div className="text-lg font-bold text-green-700">$25K/year</div>
                <div className="text-sm text-gray-600 mt-2">Widget Solution</div>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <div className="text-sm font-bold">Components</div>
                  <ul className="text-sm mt-2 space-y-2">
                    <li>• JavaScript tracking implementation</li>
                    <li>• Real-time conversion tracking</li>
                    <li>• Conversion analytics dashboard</li>
                    <li>• Engaging employee video stories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Case Study - Expanded Analysis */}
      <Card className="bg-white p-6 text-black">
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold">Customer Case Study (Job Boards)</div>
            <div className="text-gray-500 font-bold">Q4 2024</div>
          </div>
          
          {/* Current Performance Metrics */}
          <div className="space-y-8">
            <div className="relative pt-8">
              <div className="space-y-4">
                <div className="bg-blue-500 text-white p-4 rounded-t-lg w-full text-center">
                  <div className="font-semibold">Total Page Views</div>
                  <div className="text-2xl font-bold">66.1K</div>
                  <div className="text-sm">Job Page Visitors</div>
                </div>
                
                <div className="bg-blue-400 text-white p-4 w-3/5 mx-auto text-center">
                  <div className="font-semibold">Widget Video Views</div>
                  <div className="text-2xl font-bold">1.32K</div>
                  <div className="text-sm">2% View Rate</div>
                </div>
                
                <div className="bg-blue-300 text-white p-4 w-2/5 mx-auto text-center">
                  <div className="font-semibold">Applications Started</div>
                  <div className="text-2xl font-bold">244</div>
                  <div className="text-sm">18.5% Conversion from Views</div>
                </div>

                <div className="bg-blue-200 text-white p-4 w-1/3 mx-auto rounded-b-lg text-center">
                  <div className="font-semibold">Applications Completed</div>
                  <div className="text-sm italic">Pending new widget tracking enablement</div>
                </div>

              </div>
            </div>

            {/* Opportunities Analysis */}
            <div className="space-y-6 mt-8">
              <div className="text-lg font-semibold">Growth Opportunities</div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Target className="text-blue-600" size={20} />
                    <span className="font-medium">Widget Placement</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-2xl text-blue-600 mb-2">64.8K</div>
                    <div>Additional visitors could be reached by expanding widget placement</div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="text-green-600" size={20} />
                    <span className="font-medium">Potential Applications</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-2xl text-green-600 mb-2">2.4K</div>
                    <div>Estimated additional applications with full implementation</div>
                  </div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="text-purple-600" size={20} />
                    <span className="font-medium">Conversion Impact</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-2xl text-purple-600 mb-2">18.5%</div>
                    <div>Current conversion rate shows strong user intent</div>
                  </div>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="space-y-3 mt-6">
                <div className="p-4 rounded">
                  <div className="font-medium mb-2">Current State</div>
                  <div className="text-sm">Only 2% of total traffic (1.32K out of 66.1K visitors) currently sees widget videos, yet achieves 18.5% conversion to application</div>
                </div>
                
                <div className="p-4 rounded">
                  <div className="font-medium mb-2">Opportunity</div>
                  <div className="text-sm">Expanding widget placement could reach 98% more visitors (64.8K additional). At current conversion rates, this could generate 2,400+ additional applications</div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded">
                  <div className="font-medium mb-2">Next Steps</div>
                  <div className="text-sm">
                  <ul className="text-sm mt-2 space-y-2">
                    <li>1. Expand widget placement to high-traffic job pages</li>
                    <li>2. Implement additional widget tracking for full funnel</li>
                    <li>3. A/B test video content for optimization</li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataStory;