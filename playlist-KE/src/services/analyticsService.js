import { get, post } from '../utils/api';

const BASE_ENDPOINT = '/analytics';

export const analyticsService = {
  // Get dashboard stats
  getDashboardStats: () => get(`${BASE_ENDPOINT}/dashboard`),
  
  // Get stream data
  getStreamData: (params = {}) => get(`${BASE_ENDPOINT}/streams`, params),
  
  // Get user activity
  getUserActivity: (params = {}) => get(`${BASE_ENDPOINT}/users`, params),
  
  // Get top content
  getTopContent: (params = {}) => get(`${BASE_ENDPOINT}/top-content`, params),
  
  // Get regional data
  getRegionalData: () => get(`${BASE_ENDPOINT}/regional`),
  
  // Get genre breakdown
  getGenreBreakdown: () => get(`${BASE_ENDPOINT}/genres`),
  
  // Get time-based data
  getTimeData: (params = {}) => get(`${BASE_ENDPOINT}/time`, params),
  
  // Get engagement metrics
  getEngagement: () => get(`${BASE_ENDPOINT}/engagement`),
  
  // Export report
  exportReport: (type, format = 'json') => 
    post(`${BASE_ENDPOINT}/export`, { type, format }),
  
  // Track event
  trackEvent: (eventName, data) => 
    post(`${BASE_ENDPOINT}/track`, { event: eventName, ...data }),
};

export default analyticsService;

