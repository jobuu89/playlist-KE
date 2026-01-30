import React from 'react';

const RegionMap = ({ regions }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Regional Distribution</h3>
      <div className="space-y-4">
        {regions.map((region, index) => (
          <div key={index} className="flex items-center gap-4">
            <img src={region.flag} alt={region.name} className="w-8 h-6 object-cover rounded" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{region.name}</span>
                <span className="text-sm text-gray-400">{region.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${region.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionMap;

