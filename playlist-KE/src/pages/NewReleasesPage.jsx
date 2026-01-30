import React from 'react';
import NewReleases from '../components/discovery/NewReleases';

const NewReleasesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">New Releases</h1>
      <NewReleases songs={[]} onPlay={(song) => console.log('Play:', song)} />
    </div>
  );
};

export default NewReleasesPage;
