import React, { useState } from 'react';
import { Calendar, Download, Share2, Clock, TrendingUp } from 'lucide-react';
import WeeklyChartList from '../components/weekly/WeeklyChartList';
import WeekSelector from '../components/weekly/WeekSelector';

const WeeklyChartsPage = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  // Current week info
  const currentWeek = {
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    end: new Date(),
  };

  const formatDateRange = (start, end) => {
    const options = { month: 'short', day: 'numeric' };
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}, ${end.getFullYear()}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative container mx-auto px-4 pt-8">
          {/* Page Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 px-4 py-2 bg-kenya-red/20 rounded-full text-kenya-red text-sm font-medium mb-4 w-fit">
                <TrendingUp className="w-4 h-4" />
                <span>Updated Weekly</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                Weekly Charts
              </h1>
              <p className="text-gray-400">
                Top songs trending in Kenya this week
              </p>
            </div>

            {/* Week Selector */}
            <WeekSelector 
              selectedWeek={selectedWeek}
              onWeekSelect={setSelectedWeek}
            />
          </div>

          {/* Current Week Info */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <Calendar className="w-5 h-5 text-kenya-red" />
              <div>
                <p className="text-sm text-gray-400">Current Week</p>
                <p className="font-medium text-white">{formatDateRange(currentWeek.start, currentWeek.end)}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <Clock className="w-5 h-5 text-primary-500" />
              <div>
                <p className="text-sm text-gray-400">Next Update</p>
                <p className="font-medium text-white">Friday 12:00 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-400">Total Streams</p>
                <p className="font-medium text-white">1.2M+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#111827" />
          </svg>
        </div>
      </div>

      {/* Charts Content */}
      <div className="container mx-auto px-4 py-8">
        <WeeklyChartList 
          charts={[]} 
          onPlay={(chart) => console.log('Play:', chart)}
        />
      </div>
    </div>
  );
};

export default WeeklyChartsPage;

