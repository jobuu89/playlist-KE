import React from 'react';
import ArtistList from '../components/artists/ArtistList';

const ArtistsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Artists</h1>
      <ArtistList artists={[]} onArtistClick={(artist) => console.log('Artist:', artist)} />
    </div>
  );
};

export default ArtistsPage;
