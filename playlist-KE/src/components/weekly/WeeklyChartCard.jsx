import React from 'react';

const WeeklyChartCard = ({ title, subtitle, image, trend }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {trend && (
          <span className={`absolute top-2 right-2 px-2 py-1 rounded text-sm ${
            trend > 0 ? 'bg-green-500' : 'bg-red-500'
          }`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default WeeklyChartCard;

