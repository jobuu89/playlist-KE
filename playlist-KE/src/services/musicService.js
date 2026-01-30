import { get, post, put, del } from '../utils/api';

const BASE_ENDPOINT = '/songs';

export const musicService = {
  // Get all songs with optional filters
  getAll: (params = {}) => get(BASE_ENDPOINT, params),
  
  // Get single song by ID
  getById: (id) => get(`${BASE_ENDPOINT}/${id}`),
  
  // Get trending songs
  getTrending: (limit = 10) => get(`${BASE_ENDPOINT}/trending`, { limit }),
  
  // Get new releases
  getNewReleases: (limit = 10) => get(`${BASE_ENDPOINT}/new-releases`, { limit }),
  
  // Search songs
  search: (query) => get(`${BASE_ENDPOINT}/search`, { q: query }),
  
  // Get songs by genre
  getByGenre: (genre, page = 1) => get(`${BASE_ENDPOINT}/genre/${genre}`, { page }),
  
  // Get songs by artist
  getByArtist: (artistId) => get(`${BASE_ENDPOINT}/artist/${artistId}`),
  
  // Get user's favorites
  getFavorites: () => get(`${BASE_ENDPOINT}/favorites`),
  
  // Add to favorites
  addToFavorites: (songId) => post(`${BASE_ENDPOINT}/favorites`, { songId }),
  
  // Remove from favorites
  removeFromFavorites: (songId) => del(`${BASE_ENDPOINT}/favorites/${songId}`),
  
  // Get recently played
  getRecentlyPlayed: () => get(`${BASE_ENDPOINT}/recently-played`),
  
  // Increment play count
  recordPlay: (songId) => post(`${BASE_ENDPOINT}/${songId}/play`),
};

export default musicService;

