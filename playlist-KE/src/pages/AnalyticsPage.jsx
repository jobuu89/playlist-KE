import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import StatsCard from '../components/analytics/StatsCard';
import PerformanceChart from '../components/analytics/PerformanceChart';
import TrendGraph from '../components/analytics/TrendGraph';
import RegionMap from '../components/analytics/RegionMap';

const AnalyticsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Total Streams" value="--" change={0} icon="📊" />
          <StatsCard title="Active Users" value="--" change={0} icon="👥" />
          <StatsCard title="Songs Played" value="--" change={0} icon="🎵" />
          <StatsCard title="Avg. Play Time" value="--" change={0} icon="⏱️" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <PerformanceChart data={[]} title="Weekly Streams" />
          <TrendGraph data={[]} title="Stream Trends" />
        </div>
        
        <RegionMap regions={[]} />
      </div>
    </MainLayout>
  );
};

export default AnalyticsPage;

