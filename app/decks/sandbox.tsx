import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown } from 'lucide-react';

const Sandbox = () => {
  return (
    <div className="space-y-8 w-full max-w-4xl text-black">
      <Card className="bg-white p-8">
        <CardContent className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <div className="text-2xl font-bold mb-2 text-black">Try it yourself: Sandbox Environment</div>
            <div className="text-lg text-gray-600">Test the widget implementation and tracking</div>
          </div>

          {/* Testing Flow */}
          <div className="space-y-6">
            {/* Step 1: Visit Website */}
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-bold text-black">1. Visit Test Environment</div>
                <div className="text-sm bg-blue-200 px-3 py-1 rounded">sandbox.careers.dropbox.com</div>
              </div>
              <div className="space-y-2 text-black">
                <div className="text-sm">• Open sandbox environment in your browser</div>
                <div className="text-sm">• Widget automatically activates</div>
                <div className="text-sm">• Track your session ID: <span className="font-mono bg-white px-2 py-1 rounded">SESSION_GUIDID</span></div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="text-gray-400" />
            </div>

            {/* Step 2: Interact */}
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-bold text-black">2. Test Interactions</div>
                <div className="text-sm bg-green-200 px-3 py-1 rounded">Widget Testing</div>
              </div>
              <div className="space-y-2 text-black">
                <div className="text-sm">• View employee testimonial videos</div>
                <div className="text-sm">• Click through job descriptions</div>
                <div className="text-sm">• Start a mock application process</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="text-gray-400" />
            </div>

            {/* Step 3: Monitor */}
            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-bold text-black">3. View Real-time Data</div>
                <div className="text-sm bg-purple-200 px-3 py-1 rounded">analytics.themartec.com</div>
              </div>
              
              {/* Live Analytics Dashboard */}
              <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 border rounded">
                    <div className="text-sm text-gray-500">Page Views</div>
                    <div className="text-2xl font-bold text-black">1</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="text-sm text-gray-500">Widget Views</div>
                    <div className="text-2xl font-bold text-black">1</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="text-sm text-gray-500">Actions</div>
                    <div className="text-2xl font-bold text-black">1</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded">
                    <div className="text-sm font-bold mb-2 text-black">Live Session Log (With Video)</div>
                    <div className="space-y-2 font-mono text-xs">
                        <div className="p-2 bg-gray-50">12:01:23 - Page view detected - widget initialized</div>
                        <div className="p-2 bg-gray-50">12:01:25 - Widget play video</div>
                        <div className="p-2 bg-gray-50">12:02:20 - Widget play video end</div>
                        <div className="p-2 bg-gray-50">12:02:25 - Start application</div>
                        <div className="p-2 bg-gray-50">12:03:25 - Application submitted</div>
                    </div>

                    <div className="text-sm font-bold mb-2 mt-4 text-black">Live Session Log (Without Video)</div>
                    <div className="space-y-2 font-mono text-xs">
                        <div className="p-2 bg-gray-50">12:01:23 - Page view detected - widget initialized</div>
                        <div className="p-2 bg-gray-50">12:01:25 - Start application</div>
                        <div className="p-2 bg-gray-50">12:02:25 - Application submitted</div>
                    </div>
                    </div>
              </div>
            </div>
          </div>

          {/* Test Instructions */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-lg font-bold mb-4 text-black">Getting Started</div>
            <div className="space-y-2 text-black">
              <div className="text-sm">1. Open the sandbox URL in a new browser window</div>
              <div className="text-sm">2. Use the provided session ID to track your activity</div>
              <div className="text-sm">3. Complete the test application flow</div>
              <div className="text-sm">4. Watch your interactions appear in real-time on the analytics dashboard</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sandbox;