import React from 'react';
import SongCard from '../songs/SongCard';

const TrendingNow = ({ songs, onPlay }) => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">🔥</span>
        <h2 className="text-2xl font-bold">Trending Now</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;

