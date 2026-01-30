import React from 'react';

const PerformanceChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex items-end gap-2 h-48">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-primary-500 rounded-t transition-all duration-300"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;

