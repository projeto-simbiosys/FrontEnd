import React from "react";

export default function ReportFormPlaceholder() {
  return (
    <div className="w-full flex items-center flex-col gap-4 animate-pulse">
      <div className="self-start h-6 w-64 bg-gray-300 rounded" />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:items-end gap-6 lg:px-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="h-4 w-48 bg-gray-300 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded-md" />
            </div>
          ))}
      </div>
    </div>
  );
}
