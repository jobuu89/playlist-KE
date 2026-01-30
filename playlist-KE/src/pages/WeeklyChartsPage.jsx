import React, { useState } from 'react';
import WeeklyChartList from '../components/weekly/WeeklyChartList';
import WeekSelector from '../components/weekly/WeekSelector';

const WeeklyChartsPage = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Weekly Charts</h1>
      <WeekSelector currentWeek={selectedWeek} onWeekChange={setSelectedWeek} />
      <WeeklyChartList charts={[]} />
    </div>
  );
};

export default WeeklyChartsPage;
