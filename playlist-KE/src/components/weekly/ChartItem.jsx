import React from 'react';

const ChartItem = ({ chart, position }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer">
      <span className="text-2xl font-bold text-kenya-red w-8">{position}</span>
      <img src={chart.cover} alt={chart.title} className="w-16 h-16 rounded object-cover" />
      <div className="flex-1">
        <h4 className="font-semibold">{chart.title}</h4>
        <p className="text-gray-400">{chart.artist}</p>
      </div>
      <div className="text-right">
        <p className="text-primary-500 font-semibold">{chart.streams}</p>
        <p className="text-sm text-gray-500">streams</p>
      </div>
    </div>
  );
};

export default ChartItem;

