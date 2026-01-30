import React from 'react';

const TrendGraph = ({ data, title }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          <polyline
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            points={data.map((d, i) => `${(i / (data.length - 1)) * 400},${200 - (d.value / 100) * 180}`).join(' ')}
          />
        </svg>
      </div>
    </div>
  );
};

export default TrendGraph;

