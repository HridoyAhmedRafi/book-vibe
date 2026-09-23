import React from "react";

const Globalloading = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e2e5df] bg-white shadow-sm animate-pulse">
      {/* Book Image */}
      <div className="relative m-3 overflow-hidden rounded-xl bg-gray-200">
        <div className="h-60 w-full bg-gray-300" />

        {/* Category Skeleton */}
        <div className="absolute left-3 top-3 h-6 w-20 rounded-full bg-gray-400" />

        {/* Rating Skeleton */}
        <div className="absolute right-3 top-3 h-6 w-14 rounded-full bg-gray-400" />
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        {/* Book Name */}
        <div className="h-5 w-3/4 rounded bg-gray-300 md:h-6" />
        <div className="mt-2 h-5 w-1/2 rounded bg-gray-300 md:h-6" />

        {/* Author */}
        <div className="mt-3 h-3 w-2/3 rounded bg-gray-200 md:h-4" />

        {/* Tags */}
        <div className="mt-3 flex gap-1.5">
          <div className="h-6 w-16 rounded-full bg-gray-200" />
          <div className="h-6 w-20 rounded-full bg-gray-200" />
          <div className="h-6 w-14 rounded-full bg-gray-200" />
        </div>

        {/* Book Info */}
        <div className="mt-2 grid grid-cols-2 gap-2 border-y border-gray-200 py-3 md:mt-4">
          <div>
            <div className="h-3 w-12 rounded bg-gray-200" />
            <div className="mt-2 h-4 w-16 rounded bg-gray-300" />
          </div>

          {/* Published */}
          <div>
            <div className="h-3 w-16 rounded bg-gray-200" />
            <div className="mt-2 h-4 w-20 rounded bg-gray-300" />
          </div>

          {/* Publisher */}
          <div>
            <div className="h-3 w-16 rounded bg-gray-200" />
            <div className="mt-2 h-4 w-24 rounded bg-gray-300" />
          </div>

          {/* Rating */}
          <div>
            <div className="h-3 w-12 rounded bg-gray-200" />
            <div className="mt-2 h-4 w-16 rounded bg-gray-300" />
          </div>
        </div>

        {/* Button */}
        <div className="mt-2 h-9 w-full rounded-lg bg-gray-300 md:mt-4" />
      </div>
    </div>
  );
};

export default Globalloading;
