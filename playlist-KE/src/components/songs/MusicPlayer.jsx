import React from 'react';

const MusicPlayer = ({ song, isPlaying, onPlayPause, progress, onProgressChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 py-4 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <img src={song?.cover} alt={song?.title} className="w-14 h-14 rounded object-cover" />
          <div className="flex-1">
            <h4 className="font-semibold">{song?.title || 'No song selected'}</h4>
            <p className="text-sm text-gray-400">{song?.artist || 'Select a song to play'}</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">⏮</button>
            <button
              onClick={onPlayPause}
              className="w-12 h-12 flex items-center justify-center bg-kenya-red rounded-full hover:bg-red-700 transition"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="text-gray-400 hover:text-white">⏭</button>
          </div>
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={onProgressChange}
              className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

