import React from 'react';

const SongCard = ({ song, onPlay }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition cursor-pointer group">
      <div className="relative mb-4">
        <img src={song.cover} alt={song.title} className="w-full aspect-square rounded object-cover" />
        <button
          onClick={() => onPlay(song)}
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition rounded-lg"
        >
          <span className="text-4xl">▶</span>
        </button>
      </div>
      <h4 className="font-semibold truncate">{song.title}</h4>
      <p className="text-gray-400 text-sm truncate">{song.artist}</p>
      <p className="text-primary-500 text-sm mt-2">{song.duration}</p>
    </div>
  );
};

export default SongCard;

