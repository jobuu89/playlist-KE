import React from 'react';
import ChartItem from './ChartItem';

const WeeklyChartList = ({ charts }) => {
  return (
    <div className="space-y-4">
      {charts.map((chart, index) => (
        <ChartItem key={chart.id} chart={chart} position={index + 1} />
      ))}
    </div>
  );
};

export default WeeklyChartList;

