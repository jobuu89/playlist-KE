import { get, post, put, del } from '../utils/api';

const BASE_ENDPOINT = '/artists';

export const artistService = {
  // Get all artists
  getAll: (params = {}) => get(BASE_ENDPOINT, params),
  
  // Get single artist by ID
  getById: (id) => get(`${BASE_ENDPOINT}/${id}`),
  
  // Get artist by slug
  getBySlug: (slug) => get(`${BASE_ENDPOINT}/slug/${slug}`),
  
  // Search artists
  search: (query) => get(`${BASE_ENDPOINT}/search`, { q: query }),
  
  // Get top artists
  getTop: (limit = 10) => get(`${BASE_ENDPOINT}/top`, { limit }),
  
  // Get featured artists
  getFeatured: () => get(`${BASE_ENDPOINT}/featured`),
  
  // Get artists by genre
  getByGenre: (genre) => get(`${BASE_ENDPOINT}/genre/${genre}`),
  
  // Get artist songs
  getSongs: (artistId) => get(`${BASE_ENDPOINT}/${artistId}/songs`),
  
  // Get artist albums
  getAlbums: (artistId) => get(`${BASE_ENDPOINT}/${artistId}/albums`),
  
  // Follow artist
  follow: (artistId) => post(`${BASE_ENDPOINT}/${artistId}/follow`),
  
  // Unfollow artist
  unfollow: (artistId) => del(`${BASE_ENDPOINT}/${artistId}/follow`),
  
  // Get followers
  getFollowers: (artistId) => get(`${BASE_ENDPOINT}/${artistId}/followers`),
};

export default artistService;

