"use client"


export default function ListingSkeleton({count}) {
  // Number of skeleton cards to display

  // Generate an array with the specified number of elements
  const skeletonCards = Array.from({ length: count }, (_, index) => (
    <div key={index} className="p-5 shadow-lg bg-gray-200 rounded-xl">
      <div className="aspect-video relative overflow-hidden">
        <div className="animate-pulse bg-gray-300 w-full h-full"></div>
      </div>
    </div>
  ));

  return (
    <div className="list-none grid grid-cols-3 gap-5">{skeletonCards}</div>
  );
}
