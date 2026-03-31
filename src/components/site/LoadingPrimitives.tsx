import React from 'react';

export const TravelokaSkeletonBlock = ({ className = '' }: { className?: string }) => (
  <div className={`traveloka-skeleton ${className}`} />
);

export const SectionTransitionSkeleton = () => (
  <div className="section-transition-veil fixed inset-0 z-[90] pointer-events-none">
    <div className="section-transition-veil__glow" />
  </div>
);

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-[18px] ${className}`} />
);
