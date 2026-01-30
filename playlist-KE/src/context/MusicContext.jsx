import React, { createContext, useContext, useReducer } from 'react';

const MusicContext = createContext();

const initialState = {
  songs: [],
  currentSong: null,
  isPlaying: false,
  queue: [],
  filters: {
    genre: null,
    region: 'all',
  },
};

const musicReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return { ...state, songs: action.payload };
    case 'SET_CURRENT_SONG':
      return { ...state, currentSong: action.payload };
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: action.payload };
    case 'SET_QUEUE':
      return { ...state, queue: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export const MusicProvider = ({ children }) => {
  const [state, dispatch] = useReducer(musicReducer, initialState);

  return (
    <MusicContext.Provider value={{ state, dispatch }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

export default MusicContext;

