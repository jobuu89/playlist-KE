import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import TrendingNow from '../components/discovery/TrendingNow';
import NewReleases from '../components/discovery/NewReleases';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <TrendingNow
          songs={[]}
          onPlay={(song) => console.log('Play:', song)}
        />
        
        <NewReleases
          songs={[]}
          onPlay={(song) => console.log('Play:', song)}
        />
      </div>
    </MainLayout>
  );
};

export default HomePage;

