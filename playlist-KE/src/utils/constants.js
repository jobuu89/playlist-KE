// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Application Constants
export const APP_NAME = 'Playlist KE';
export const APP_VERSION = '1.0.0';

// Music Genres
export const GENRES = [
  'Bongo Flava',
  'Genge',
  'Kapuka',
  'RnB',
  'Afrobeat',
  'Reggae',
  'Hip Hop',
  'Jazz',
  'Rock',
  'Classical',
];

// Kenyan Regions
export const REGIONS = [
  { code: 'nairobi', name: 'Nairobi' },
  { code: 'mombasa', name: 'Mombasa' },
  { code: 'kisumu', name: 'Kisumu' },
  { code: 'nakuru', name: 'Nakuru' },
  { code: 'eldoret', name: 'Eldoret' },
  { code: 'other', name: 'Other' },
];

// Pagination
export const ITEMS_PER_PAGE = 20;
export const INITIAL_PAGE = 1;

// Storage Keys
export const STORAGE_KEYS = {
  USER: 'playlist_ke_user',
  FAVORITES: 'playlist_ke_favorites',
  RECENTLY_PLAYED: 'playlist_ke_recently_played',
  PLAYLIST: 'playlist_ke_playlist',
  SETTINGS: 'playlist_ke_settings',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'Resource not found.',
  UNAUTHORIZED: 'Please log in to continue.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  VALIDATION_ERROR: 'Please check your input and try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  ADDED_TO_FAVORITES: 'Added to favorites',
  REMOVED_FROM_FAVORITES: 'Removed from favorites',
  ADDED_TO_PLAYLIST: 'Added to playlist',
  SONG_PLAYING: 'Now playing',
};

// Timeouts
export const DEBOUNCE_DELAY = 300;
export const SESSION_TIMEOUT = 3600000; // 1 hour

// Chart Periods
export const CHART_PERIODS = [
  { value: 'daily', label: 'Today' },
  { value: 'weekly', label: 'This Week' },
  { value: 'monthly', label: 'This Month' },
  { value: 'alltime', label: 'All Time' },
];

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/playlistke',
  instagram: 'https://instagram.com/playlistke',
  facebook: 'https://facebook.com/playlistke',
  youtube: 'https://youtube.com/playlistke',
};

