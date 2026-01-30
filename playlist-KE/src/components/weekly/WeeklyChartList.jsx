import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Filter, Download, Share2 } from 'lucide-react';
import ChartItem from './ChartItem';
import { ListSkeleton } from '../shared/Skeleton';

const WeeklyChartList = ({ charts, onPlay, isLoading = false }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Songs', count: charts.length },
    { id: 'new', label: 'New Entries', count: 3 },
    { id: 'up', label: 'Rising', count: 5 },
    { id: 'down', label: 'Falling', count: 2 },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Kenyan Music Weekly Charts',
        text: 'Check out this week\'s hottest Kenyan songs!',
        url: window.location.href,
      });
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Weekly Charts</h2>
          <p className="text-gray-400">
            Top {charts.length || 10} songs trending in Kenya this week
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                             text-white rounded-lg text-sm font-medium transition-colors
                             border border-gray-700">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                       text-white rounded-lg text-sm font-medium transition-colors
                       border border-gray-700"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-gray-500 shrink-0" />
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                       ${activeFilter === filter.id 
                         ? 'bg-kenya-red text-white' 
                         : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'}`}
          >
            {filter.label}
            {filter.count > 0 && (
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs
                              ${activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-700'}`}>
                {filter.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {isLoading ? (
        <ListSkeleton items={10} />
      ) : charts.length > 0 ? (
        <>
          {/* Chart List */}
          <div className="space-y-4">
            {charts.map((chart, index) => (
              <ChartItem 
                key={chart.id} 
                chart={chart} 
                position={index + 1}
                onPlay={onPlay}
              />
            ))}
          </div>

          {/* Load More */}
          {charts.length >= 10 && (
            <div className="text-center mt-8">
              <button className="px-8 py-3 bg-gray-800 text-white rounded-full 
                                 font-medium hover:bg-gray-700 transition-colors
                                 border border-gray-700">
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="bg-gray-800/50 rounded-2xl p-12 text-center border border-gray-700/50">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700/50 rounded-full mb-6">
            <svg className="w-10 h-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Charts coming soon</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Weekly charts are compiled every Friday. Connect your backend to display the rankings.
          </p>
          <div className="flex justify-center gap-3">
            <button className="px-6 py-2 bg-kenya-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
              Add Sample Data
            </button>
          </div>
        </div>
      )}

      {/* Info Card */}
      <div className="mt-8 p-6 bg-gradient-to-r from-kenya-red/10 to-purple-500/10 rounded-xl border border-gray-700/50">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-kenya-red/20 rounded-xl">
            <svg className="w-6 h-6 text-kenya-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">How charts work</h4>
            <p className="text-gray-400 text-sm">
              Our weekly charts are based on streaming data from major platforms across Kenya. 
              Rankings update every Friday at noon. Artists can claim their profiles and track their performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyChartList;

