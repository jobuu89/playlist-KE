import React from 'react';

const PlayerBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 px-6 border-t border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-700 rounded"></div>
          <div>
            <h4 className="font-semibold">No song playing</h4>
            <p className="text-sm text-gray-400">Select a song to play</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-primary-500 transition">Previous</button>
          <button className="p-2 hover:text-primary-500 transition">Play</button>
          <button className="p-2 hover:text-primary-500 transition">Next</button>
        </div>
        <div className="w-1/3">
          <div className="h-1 bg-gray-700 rounded-full">
            <div className="w-0 h-full bg-primary-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;

