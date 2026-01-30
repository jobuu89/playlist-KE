import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [queue, setQueue] = useState([]);

  const play = useCallback((song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
  }, []);

  const pause = useCallback(() => setIsPlaying(false), []);
  const resume = useCallback(() => setIsPlaying(true), []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const addToQueue = useCallback((song) => {
    setQueue(prev => [...prev, song]);
  }, []);

  const clearQueue = useCallback(() => {
    setQueue([]);
  }, []);

  const value = useMemo(() => ({
    currentSong,
    isPlaying,
    progress,
    volume,
    queue,
    play,
    pause,
    resume,
    togglePlayPause,
    setProgress,
    setVolume,
    addToQueue,
    clearQueue,
  }), [currentSong, isPlaying, progress, volume, queue, play, pause, resume, togglePlayPause, setProgress, setVolume, addToQueue, clearQueue]);

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

export default PlayerContext;

