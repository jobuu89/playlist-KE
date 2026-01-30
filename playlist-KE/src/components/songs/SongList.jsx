import React from 'react';

const SongList = ({ songs, onPlay }) => {
  return (
    <div className="space-y-2">
      {songs.map((song, index) => (
        <div
          key={song.id}
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          onClick={() => onPlay(song)}
        >
          <span className="text-gray-500 w-6">{index + 1}</span>
          <img src={song.cover} alt={song.title} className="w-12 h-12 rounded object-cover" />
          <div className="flex-1 min-w-0">
            <h4 className="font-medium truncate">{song.title}</h4>
            <p className="text-gray-400 text-sm truncate">{song.artist}</p>
          </div>
          <span className="text-gray-400">{song.duration}</span>
        </div>
      ))}
    </div>
  );
};

export default SongList;

