import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="space-y-8 w-full max-w-4xl">
      <Card className="bg-white p-6">
        <CardContent>
          <div className="text-2xl font-bold mb-6 text-black">How to Implement & Track</div>
          
          {/* Implementation Journey */}
          <div className="space-y-8">
            {/* Step 1: Implementation */}
            <div className="flex items-center gap-6">
              <div className="w-1/3 p-4 bg-blue-50 rounded-lg text-black">
                <div className="text-lg font-bold mb-2">1. Implementation</div>
                <div className="text-sm space-y-2">
                  <p>Add our JavaScript snippet to your career pages:</p>
                  <div className="bg-gray-800 text-green-400 p-3 rounded text-xs">
                    {'<script src="widget.themartec.com/track.js"></script>'}
                  </div>
                </div>
              </div>
              <ArrowRight className="text-gray-400" />
              <div className="w-1/3 p-4 bg-blue-50 rounded-lg text-black">
                <div className="text-lg font-bold mb-2">2. Configuration</div>
                <div className="text-sm">
                  <ul className="space-y-1">
                    <li>• Set tracking parameters</li>
                    <li>• Define conversion points</li>
                    <li>• Configure video placement</li>
                  </ul>
                </div>
              </div>
              <ArrowRight className="text-gray-400" />
              <div className="w-1/3 p-4 bg-blue-50 rounded-lg text-black">
                <div className="text-lg font-bold mb-2">3. Verification</div>
                <div className="text-sm">
                  <ul className="space-y-1">
                    <li>• Test tracking setup</li>
                    <li>• Verify data flow</li>
                    <li>• Confirm dashboard access</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2: User Journey Example */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="text-lg font-bold mb-4 text-black">Example: Customer Implementation</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 p-4 bg-white rounded-lg border text-black">
                      <div className="font-bold mb-2">Visit careers.customer.com</div>
                      <div className="text-sm">
                        • Widget automatically loads<br />
                        • Tracking begins on page load<br />
                        • Session data captured
                      </div>
                    </div>
                    <ArrowRight className="text-gray-400" />
                    <div className="flex-1 p-4 bg-white rounded-lg border text-black">
                      <div className="font-bold mb-2">Engage with Content</div>
                      <div className="text-sm">
                        • View employee videos<br />
                        • Click job listings<br />
                        • Interaction tracking
                      </div>
                    </div>
                    <ArrowRight className="text-gray-400" />
                    <div className="flex-1 p-4 bg-white rounded-lg border text-black">
                      <div className="font-bold mb-2">Submit Application</div>
                      <div className="text-sm">
                        • Form interactions tracked<br />
                        • Conversion registered<br />
                        • Journey completed
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Data Visualization */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-lg font-bold mb-4 text-black">Real-time Analytics Dashboard</div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                      <div className="text-sm font-medium text-gray-500">Views on the Pages</div>
                      <div className="text-2xl font-bold">247</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                      <div className="text-sm font-medium text-gray-500">Views on the Widgets</div>
                      <div className="text-2xl font-bold">1.3K</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                      <div className="text-sm font-medium text-gray-500">Conversions</div>
                      <div className="text-2xl font-bold">18.5%</div>
                    </div>
                  </div>
                  <div className="h-48 bg-white rounded-lg p-4 text-center flex items-center justify-center text-gray-400">
                    [Superset Analytics Charts & Graphs]
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowItWorks;