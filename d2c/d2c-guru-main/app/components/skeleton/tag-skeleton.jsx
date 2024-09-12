import React from "react";

export default function TagsSkeleton() {
  return (
    <div>
      <div className="h-full animate-pulse flex gap-2 flex-wrap">
        <div className="w-24 h-6 rounded-lg bg-gray-100"></div>
        <div className="w-16 h-6 rounded-lg bg-gray-100"></div>
        <div className="w-36 h-6 rounded-lg bg-gray-100"></div>
        <div className="w-24 h-6 rounded-lg bg-gray-100"></div>
        <div className="w-32 h-6 rounded-lg bg-gray-100"></div>
        <div className="w-36 h-6 rounded-lg bg-gray-100"></div>
        <div className="w-32 h-6 rounded-lg bg-gray-100"></div>
        <div className="w-36 h-6 rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
}
