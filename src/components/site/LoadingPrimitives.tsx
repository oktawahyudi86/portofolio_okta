import React from 'react';

export const TravelokaSkeletonBlock = ({ className = '' }: { className?: string }) => (
  <div className={`traveloka-skeleton ${className}`} />
);

export const SectionTransitionSkeleton = () => (
  <div className="fixed inset-0 z-[90] bg-[#f4f6fb]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-36 pb-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div className="space-y-6">
          <TravelokaSkeletonBlock className="h-10 w-40 rounded-full" />
          <TravelokaSkeletonBlock className="h-16 w-full max-w-[520px] rounded-[22px]" />
          <TravelokaSkeletonBlock className="h-16 w-full max-w-[460px] rounded-[22px]" />
          <TravelokaSkeletonBlock className="h-28 w-full max-w-[560px] rounded-[32px]" />
          <div className="grid grid-cols-2 gap-4 max-w-[420px]">
            <TravelokaSkeletonBlock className="h-20 rounded-[24px]" />
            <TravelokaSkeletonBlock className="h-20 rounded-[24px]" />
          </div>
        </div>
        <div className="space-y-5">
          <TravelokaSkeletonBlock className="h-[340px] w-full rounded-[34px]" />
          <div className="grid grid-cols-2 gap-4">
            <TravelokaSkeletonBlock className="h-28 rounded-[24px]" />
            <TravelokaSkeletonBlock className="h-28 rounded-[24px]" />
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
        <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
        <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
      </div>
    </div>
  </div>
);

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-[18px] ${className}`} />
);
