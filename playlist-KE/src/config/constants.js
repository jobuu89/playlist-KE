// Application Constants

// App Info
export const APP_NAME = 'Playlist KE';
export const APP_VERSION = '1.0.0';

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
export const API_TIMEOUT = 30000;

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

// Kenyan Counties/Regions
export const REGIONS = [
  { code: 'nairobi', name: 'Nairobi', countyCode: '047' },
  { code: 'mombasa', name: 'Mombasa', countyCode: '001' },
  { code: 'kisumu', name: 'Kisumu', countyCode: '042' },
  { code: 'nakuru', name: 'Nakuru', countyCode: '032' },
  { code: 'eldoret', name: 'Uasin Gishu', countyCode: '047' },
  { code: 'kericho', name: 'Kericho', countyCode: '035' },
  { code: 'nyeri', name: 'Nyeri', countyCode: '036' },
  { code: 'machakos', name: 'Machakos', countyCode: '016' },
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
  THEME: 'playlist_ke_theme',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'Resource not found.',
  UNAUTHORIZED: 'Please log in to continue.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  TIMEOUT: 'Request timed out. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  ADDED_TO_FAVORITES: 'Added to favorites',
  REMOVED_FROM_FAVORITES: 'Removed from favorites',
  ADDED_TO_PLAYLIST: 'Added to playlist',
  SONG_PLAYING: 'Now playing',
  PROFILE_UPDATED: 'Profile updated successfully',
};

// Debounce & Timeout Values
export const DEBOUNCE_DELAY = 300;
export const SESSION_TIMEOUT = 3600000; // 1 hour
export const AUTO_SAVE_DELAY = 1000;

// Chart Periods
export const CHART_PERIODS = [
  { value: 'daily', label: 'Today' },
  { value: 'weekly', label: 'This Week' },
  { value: 'monthly', label: 'This Month' },
  { value: 'alltime', label: 'All Time' },
];

// Player Settings
export const PLAYER_SETTINGS = {
  DEFAULT_VOLUME: 80,
  MAX_VOLUME: 100,
  MIN_VOLUME: 0,
  SKIP_DURATION: 15000, // 15 seconds
};

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/playlistke',
  instagram: 'https://instagram.com/playlistke',
  facebook: 'https://facebook.com/playlistke',
  youtube: 'https://youtube.com/@playlistke',
};

// File Upload Limits
export const UPLOAD_LIMITS = {
  MAX_COVER_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_AUDIO_SIZE: 50 * 1024 * 1024, // 50MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_AUDIO_TYPES: ['audio/mpeg', 'audio/wav', 'audio/mp3'],
};

// Supported Languages
export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'sw', name: 'Swahili' },
];

// Default Avatar
export const DEFAULT_AVATAR = '/src/assets/images/artists/placeholder.jpg';

// Cookie Names
export const COOKIES = {
  SESSION: 'playlist_ke_session',
  PREFERENCES: 'playlist_ke_preferences',
};

