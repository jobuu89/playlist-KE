import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import WeeklyChartList from '../components/weekly/WeeklyChartList';
import WeekSelector from '../components/weekly/WeekSelector';

const WeeklyChartsPage = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Weekly Charts</h1>
        <WeekSelector currentWeek={selectedWeek} onWeekChange={setSelectedWeek} />
        <WeeklyChartList charts={[]} />
      </div>
    </MainLayout>
  );
};

export default WeeklyChartsPage;

