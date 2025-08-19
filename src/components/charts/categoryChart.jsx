import React from 'react'

export default function categoryChart() {
  return (
 <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Spend Activity</h2>
            <p className="text-gray-500">October 2023</p>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex space-x-8 border-b border-gray-200">
              <button className="pb-3 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
                Spend and revenue
              </button>
              <button className="pb-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
                Spend by merchant
              </button>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative">
            <div className="flex justify-between items-end mb-4">
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">1.2k</p>
                <p className="text-xs text-gray-400 mb-1">800</p>
                <p className="text-xs text-gray-400 mb-1">400</p>
                <p className="text-xs text-gray-400">0</p>
              </div>
            </div>
            
            {/* Simple Chart Representation */}
            <div className="h-32 relative border-b border-gray-200">
              <svg className="w-full h-full" viewBox="0 0 800 120">
                {/* Revenue line (green) */}
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="0,80 50,70 100,60 150,90 200,65 250,60 300,70 350,65 400,55 450,60 500,70 550,80 600,50 650,60 700,45 750,40 800,45"
                />
                {/* Spend line (red) */}
                <polyline
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  points="0,90 50,75 100,85 150,60 200,70 250,85 300,90 350,80 400,95 450,75 500,85 550,90 600,70 650,75 700,65 750,70 800,65"
                />
              </svg>
            </div>
            
            {/* X-axis labels */}
            <div className="flex justify-between mt-3 text-xs text-gray-400">
              <span>Sep 3</span>
              <span>Sep 18</span>
            </div>
          </div>
        </div>
  )
}
