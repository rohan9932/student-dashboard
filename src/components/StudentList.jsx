import { useState } from 'react';

export default function StudentList({ totalStudents, children }) {

  // Part 5: Conditional Rendering using if...else or switch
  let batchStatusMessage = "";
  if (totalStudents === 0) {
    batchStatusMessage = "No Students Found";
  } else if (totalStudents >= 1 && totalStudents <= 5) {
    batchStatusMessage = "Small Batch";
  } else {
    batchStatusMessage = "Large Batch";
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      {/* Batch Status Label */}
      <div className="mb-4">
        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
          {batchStatusMessage}
        </span>
      </div>

      {/* Grid container where children (StudentCards) will render */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}