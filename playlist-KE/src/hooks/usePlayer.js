import { useState, useCallback } from 'react';

const usePlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [queue, setQueue] = useState([]);

  const play = useCallback((song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resume = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      resume();
    }
  }, [isPlaying, pause, resume]);

  const nextSong = useCallback(() => {
    const currentIndex = queue.findIndex(s => s.id === currentSong?.id);
    if (currentIndex < queue.length - 1) {
      play(queue[currentIndex + 1]);
    }
  }, [queue, currentSong, play]);

  const previousSong = useCallback(() => {
    const currentIndex = queue.findIndex(s => s.id === currentSong?.id);
    if (currentIndex > 0) {
      play(queue[currentIndex - 1]);
    }
  }, [queue, currentSong, play]);

  const addToQueue = useCallback((song) => {
    setQueue(prev => [...prev, song]);
  }, []);

  return {
    currentSong,
    isPlaying,
    progress,
    queue,
    play,
    pause,
    resume,
    togglePlayPause,
    nextSong,
    previousSong,
    addToQueue,
    setProgress,
  };
};

export default usePlayer;

