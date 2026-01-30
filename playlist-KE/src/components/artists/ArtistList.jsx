import React from 'react';
import ArtistCard from './ArtistCard';

const ArtistList = ({ artists, onArtistClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} onClick={onArtistClick} />
      ))}
    </div>
  );
};

export default ArtistList;

