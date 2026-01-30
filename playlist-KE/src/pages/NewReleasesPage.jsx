import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NewReleases from '../components/discovery/NewReleases';

const NewReleasesPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">New Releases</h1>
        <NewReleases songs={[]} onPlay={(song) => console.log('Play:', song)} />
      </div>
    </MainLayout>
  );
};

export default NewReleasesPage;

