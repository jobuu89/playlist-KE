import React, { useState } from 'react';
import { Play, Heart, MoreVertical, TrendingUp, TrendingDown } from 'lucide-react';

const ChartItem = ({ chart, position, onPlay, onAddToPlaylist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Placeholder image
  const placeholderImage = `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop`;

  // Generate trend indicator (random for demo)
  const getTrend = () => {
    if (!chart?.trend) return { direction: 'same', change: 0 };
    return chart.trend;
  };

  const trend = getTrend();

  const getTrendIcon = () => {
    if (trend.direction === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend.direction === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <span className="text-gray-500 text-sm">-</span>;
  };

  const getTrendColor = () => {
    if (trend.direction === 'up') return 'text-green-500';
    if (trend.direction === 'down') return 'text-red-500';
    return 'text-gray-500';
  };

  // Special styling for top 3 positions
  const getPositionStyle = (pos) => {
    if (pos === 1) return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black';
    if (pos === 2) return 'bg-gradient-to-r from-gray-300 to-gray-400 text-black';
    if (pos === 3) return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white';
    return 'bg-gray-700 text-white';
  };

  return (
    <div
      className={`group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                 ${isHovered ? 'bg-gray-800/80 scale-[1.02]' : 'bg-gray-800/50'}
                 hover:shadow-lg hover:shadow-kenya-red/10 card-hover cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay?.(chart)}
    >
      {/* Position Number */}
      <div className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold ${getPositionStyle(position)}`}>
        {position}
      </div>

      {/* Album Art */}
      <div className="relative shrink-0">
        <img
          src={chart?.cover || placeholderImage}
          alt={chart?.title || 'Chart'}
          className={`w-16 h-16 rounded-lg object-cover transition-transform duration-300
                     ${isHovered ? 'scale-110' : ''}`}
        />
        {/* Play Overlay */}
        <div
          className={`absolute inset-0 rounded-lg bg-black/50 flex items-center justify-center
                      transition-all duration-300
                      ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <Play className="w-6 h-6 text-white fill-current" />
        </div>
      </div>

      {/* Song Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-white truncate group-hover:text-kenya-red transition-colors">
          {chart?.title || 'Unknown Title'}
        </h4>
        <p className="text-gray-400 text-sm truncate">{chart?.artist || 'Unknown Artist'}</p>
        {chart?.album && (
          <p className="text-gray-500 text-xs truncate mt-1">{chart.album}</p>
        )}
      </div>

      {/* Actions & Stats */}
      <div className="flex items-center gap-4">
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`p-2 rounded-full transition-all duration-300
                     ${isLiked ? 'bg-kenya-red text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}
                     ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* More Options */}
        <button
          onClick={(e) => e.stopPropagation()}
          className={`p-2 rounded-full bg-gray-700 text-gray-400 hover:bg-gray-600 transition-all duration-300
                     ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <MoreVertical className="w-4 h-4" />
        </button>

        {/* Stream Count */}
        <div className="text-right min-w-[80px]">
          <p className="text-kenya-red font-semibold">{chart?.streams || '0'}</p>
          <p className="text-xs text-gray-500">streams</p>
        </div>

        {/* Trend Indicator */}
        {chart?.trend && (
          <div className={`flex flex-col items-center ${getTrendColor()}`}>
            {getTrendIcon()}
            {trend.change > 0 && (
              <span className="text-xs">+{trend.change}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartItem;

