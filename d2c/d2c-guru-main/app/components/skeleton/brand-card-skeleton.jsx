import React from "react";

export default function BrandCardSkeleton({ className }) {
  return (
    <div className={`flex flex-col animate-pulse ${className}`}>
      <div className="w-full h-full aspect-square bg-gray-100 p-4 mb-2"></div>
      <div>
        <div className="w-3/4 h-6 rounded-lg bg-gray-100 mb-2"></div>
        <div className="w-full bg-gray-100 mb-2 h-10 rounded-lg"></div>
        <div className="flex gap-2">
          <div className="w-24 h-6 rounded-lg bg-gray-100"></div>
          <div className="w-24 h-6 rounded-lg bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
