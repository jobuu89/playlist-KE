import { useState, useEffect } from 'react';

const useAnalytics = () => {
  const [stats, setStats] = useState({
    totalStreams: 0,
    activeUsers: 0,
    songsPlayed: 0,
    avgPlayTime: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        // Simulated API call
        setStats({
          totalStreams: 1200000,
          activeUsers: 45000,
          songsPlayed: 890000,
          avgPlayTime: 4.2,
        });
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return { stats, loading, error };
};

export default useAnalytics;

