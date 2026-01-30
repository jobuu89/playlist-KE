import React from 'react';

const Skeleton = ({ className = '', variant = 'text', width, height }) => {
  const baseClass = 'animate-shimmer bg-gray-700 rounded';
  
  const variantClasses = {
    text: 'h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl',
    avatar: 'rounded-full',
  };

  const style = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1rem' : undefined),
  };

  return (
    <div
      className={`${baseClass} ${variantClasses[variant] || ''} ${className}`}
      style={style}
    />
  );
};

// Card Skeleton for Song Cards
export const SongCardSkeleton = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="relative mb-4">
        <Skeleton variant="card" className="aspect-square" />
      </div>
      <Skeleton variant="text" className="h-4 w-3/4 mb-2" />
      <Skeleton variant="text" className="h-3 w-1/2 mb-2" />
      <Skeleton variant="text" className="h-3 w-1/4" />
    </div>
  );
};

// Artist Card Skeleton
export const ArtistCardSkeleton = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <Skeleton variant="avatar" className="w-32 h-32" />
      </div>
      <Skeleton variant="text" className="h-5 w-3/4 mx-auto mb-2" />
      <Skeleton variant="text" className="h-3 w-1/2 mx-auto mb-2" />
      <Skeleton variant="text" className="h-3 w-1/3 mx-auto" />
    </div>
  );
};

// Chart Item Skeleton
export const ChartItemSkeleton = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
      <Skeleton variant="text" className="w-8 h-8" />
      <Skeleton variant="rectangular" className="w-16 h-16" />
      <div className="flex-1">
        <Skeleton variant="text" className="h-4 w-3/4 mb-2" />
        <Skeleton variant="text" className="h-3 w-1/2" />
      </div>
      <div className="text-right">
        <Skeleton variant="text" className="h-4 w-16 mb-1" />
        <Skeleton variant="text" className="h-2 w-12" />
      </div>
    </div>
  );
};

// List Skeleton
export const ListSkeleton = ({ items = 5 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, i) => (
        <ChartItemSkeleton key={i} />
      ))}
    </div>
  );
};

// Grid Skeleton
export const GridSkeleton = ({ items = 8, cardType = 'song' }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array.from({ length: items }).map((_, i) => (
        <SongCardSkeleton key={i} />
      ))}
    </div>
  );
};

// Section Header Skeleton
export const SectionHeaderSkeleton = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <Skeleton variant="text" className="h-8 w-48" />
      </div>
      <Skeleton variant="text" className="h-4 w-20" />
    </div>
  );
};

// Player Bar Skeleton
export const PlayerBarSkeleton = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Skeleton variant="rectangular" className="w-12 h-12" />
        <div>
          <Skeleton variant="text" className="h-4 w-32 mb-1" />
          <Skeleton variant="text" className="h-3 w-24" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Skeleton variant="text" className="h-6 w-6" />
        <Skeleton variant="circular" className="w-10 h-10" />
        <Skeleton variant="text" className="h-6 w-6" />
      </div>
      <div className="flex-1 max-w-xs">
        <Skeleton variant="text" className="h-1 w-full" />
      </div>
    </div>
  );
};

// Stats Card Skeleton
export const StatsCardSkeleton = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="circular" className="w-12 h-12" />
      </div>
      <Skeleton variant="text" className="h-8 w-24 mb-2" />
      <Skeleton variant="text" className="h-4 w-32" />
    </div>
  );
};

// Default export
export default Skeleton;

