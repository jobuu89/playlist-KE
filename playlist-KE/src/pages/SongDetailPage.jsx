import React from 'react';
import SongDetail from '../components/songs/SongDetail';
import SongList from '../components/songs/SongList';

const SongDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SongDetail song={null} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Songs</h2>
        <SongList songs={[]} onPlay={(song) => console.log('Play:', song)} />
      </div>
    </div>
  );
};

export default SongDetailPage;
