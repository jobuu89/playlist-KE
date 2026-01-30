// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const apiConfig = {
  baseUrl: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    songs: '/songs',
    artists: '/artists',
    charts: '/charts',
    analytics: '/analytics',
    auth: '/auth',
    user: '/user',
  },
};

export default apiConfig;

