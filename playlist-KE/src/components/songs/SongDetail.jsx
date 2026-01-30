import React from 'react';

const SongDetail = ({ song }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex gap-6">
        <img src={song.cover} alt={song.title} className="w-64 h-64 rounded-xl object-cover" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{song.title}</h1>
          <h2 className="text-xl text-gray-400 mb-4">{song.artist}</h2>
          <div className="flex gap-4 text-sm text-gray-500 mb-6">
            <span>{song.album}</span>
            <span>•</span>
            <span>{song.year}</span>
            <span>•</span>
            <span>{song.duration}</span>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-kenya-red text-white rounded-lg hover:bg-red-700 transition">
              Play
            </button>
            <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
              Add to Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;

