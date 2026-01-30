import { get } from '../utils/api';

const BASE_ENDPOINT = '/charts';

export const chartService = {
  // Get weekly chart
  getWeekly: (period = 'current', region = 'all') => 
    get(`${BASE_ENDPOINT}/weekly`, { period, region }),
  
  // Get monthly chart
  getMonthly: (region = 'all') => get(`${BASE_ENDPOINT}/monthly`, { region }),
  
  // Get all-time chart
  getAllTime: () => get(`${BASE_ENDPOINT}/all-time`),
  
  // Get chart history for a song
  getSongHistory: (songId) => get(`${BASE_ENDPOINT}/song/${songId}/history`),
  
  // Get chart positions for an artist
  getArtistPositions: (artistId) => get(`${BASE_ENDPOINT}/artist/${artistId}/positions`),
  
  // Get trending songs (rapidly changing)
  getTrending: (limit = 20) => get(`${BASE_ENDPOINT}/trending`, { limit }),
  
  // Get rising songs (gaining popularity)
  getRising: (limit = 10) => get(`${BASE_ENDPOINT}/rising`, { limit }),
  
  // Get regional chart
  getRegional: (region, limit = 50) => get(`${BASE_ENDPOINT}/regional/${region}`, { limit }),
  
  // Get genre-specific chart
  getByGenre: (genre, limit = 50) => get(`${BASE_ENDPOINT}/genre/${genre}`, { limit }),
};

export default chartService;

