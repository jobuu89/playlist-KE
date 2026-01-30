import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Volume2, VolumeX, ListMusic, Shuffle, Repeat } from 'lucide-react';

const PlayerBar = ({ 
  song, 
  isPlaying, 
  onPlayPause, 
  progress = 0, 
  onProgressChange,
  volume = 80,
  onVolumeChange,
  isMuted = false,
  onMuteToggle
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState('off'); // off, all, one

  // Placeholder image
  const placeholderImage = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop';

  const formatTime = (seconds) => {
    if (!seconds && seconds !== 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = (progress / 100) * (song?.duration || 180); // Assume 3 min if no duration
  const duration = song?.duration || 180;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 py-3 px-4 z-50">
      <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">
        
        {/* Song Info */}
        <div className="flex items-center gap-4 w-1/4">
          <div className="relative group">
            <img
              src={song?.cover || placeholderImage}
              alt={song?.title || 'No song'}
              className={`w-14 h-14 rounded-lg object-cover shadow-lg transition-transform duration-300
                         ${isPlaying ? 'scale-105' : ''}`}
            />
            {isPlaying && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-kenya-red rounded-full animate-pulse" />
            )}
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-white truncate">{song?.title || 'No song playing'}</h4>
            <p className="text-sm text-gray-400 truncate">{song?.artist || 'Select a song to play'}</p>
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full transition-all duration-300
                       ${isLiked ? 'text-kenya-red' : 'text-gray-400 hover:text-white'}
                       opacity-0 group-hover:opacity-100`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-1/2 max-w-xl">
          {/* Control Buttons */}
          <div className="flex items-center gap-4 mb-2">
            <button
              onClick={() => setIsShuffled(!isShuffled)}
              className={`p-2 transition-colors ${isShuffled ? 'text-kenya-red' : 'text-gray-400 hover:text-white'}`}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            
            <button
              onClick={onPlayPause}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full
                         transform transition-all duration-300 hover:scale-105 hover:bg-gray-200"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-gray-900 fill-current" />
              ) : (
                <Play className="w-6 h-6 text-gray-900 fill-current ml-1" />
              )}
            </button>
            
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setRepeatMode(repeatMode === 'off' ? 'all' : repeatMode === 'all' ? 'one' : 'off')}
              className={`p-2 transition-colors ${repeatMode !== 'off' ? 'text-kenya-red' : 'text-gray-400 hover:text-white'}`}
            >
              <Repeat className={`w-4 h-4 ${repeatMode === 'one' ? 'text-xs' : ''}`} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-3 w-full">
            <span className="text-xs text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
            <div className="flex-1 relative group">
              {/* Progress Background */}
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
                {/* Progress Fill */}
                <div 
                  className="h-full bg-gradient-to-r from-kenya-red to-primary-500 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
                {/* Progress Thumb */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg
                             opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
                />
              </div>
              {/* Invisible Slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={onProgressChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-xs text-gray-400 w-10">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume & Extra Controls */}
        <div className="flex items-center justify-end gap-3 w-1/4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <ListMusic className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 group">
            <button
              onClick={onMuteToggle}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <div className="w-24 hidden sm:block">
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
                <div 
                  className={`h-full rounded-full transition-all duration-100
                              ${isMuted || volume === 0 ? 'bg-gray-600' : 'bg-gradient-to-r from-kenya-red to-primary-500'}`}
                  style={{ width: `${isMuted ? 0 : volume}%` }}
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={onVolumeChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;

