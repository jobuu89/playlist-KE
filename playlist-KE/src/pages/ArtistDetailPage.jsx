import React from 'react';
import ArtistProfile from '../components/artists/ArtistProfile';
import SongList from '../components/songs/SongList';

const ArtistDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ArtistProfile artist={null} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Top Songs</h2>
        <SongList songs={[]} onPlay={(song) => console.log('Play:', song)} />
      </div>
    </div>
  );
};

export default ArtistDetailPage;
