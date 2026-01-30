import React, { createContext, useState, useContext, useEffect, useMemo, useCallback } from 'react';
import { musicService } from '../services/musicService';
import { chartService } from '../services/chartService';
import { artistService } from '../services/artistService';

const MusicContext = createContext();

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

export const MusicProvider = ({ children }) => {
  const [weeklyCharts, setWeeklyCharts] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [featuredArtists, setFeaturedArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeeklyCharts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await chartService.getWeekly();
      setWeeklyCharts(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weekly charts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchNewReleases = useCallback(async () => {
    try {
      setLoading(true);
      const data = await musicService.getNewReleases(10);
      setNewReleases(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch new releases');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchFeaturedArtists = useCallback(async () => {
    try {
      setLoading(true);
      const data = await artistService.getAll({ page: 1, limit: 5 });
      setFeaturedArtists(data.artists || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch featured artists');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshData = useCallback(() => {
    fetchWeeklyCharts();
    fetchNewReleases();
    fetchFeaturedArtists();
  }, [fetchWeeklyCharts, fetchNewReleases, fetchFeaturedArtists]);

  useEffect(() => {
    fetchWeeklyCharts();
    fetchNewReleases();
    fetchFeaturedArtists();
  }, [fetchWeeklyCharts, fetchNewReleases, fetchFeaturedArtists]);

  const value = useMemo(() => ({
    weeklyCharts,
    newReleases,
    featuredArtists,
    loading,
    error,
    refreshData,
  }), [weeklyCharts, newReleases, featuredArtists, loading, error, refreshData]);

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;

