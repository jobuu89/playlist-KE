import React from 'react';
import SongCard from '../songs/SongCard';

const NewReleases = ({ songs, onPlay }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6">New Releases</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
};

export default NewReleases;

