import { useState } from 'react';

export default function StudentCard({ id, name, department, cgpa, isActive, onDelete }) {

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-heading text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm font-body mt-0.5">Dept: {department}</p>
        <p className="text-gray-500 text-sm font-body">CGPA: {cgpa}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">

          {isActive ? (
            <span className="text-green-700 bg-green-50 px-2 py-0.5 rounded">Active (Ternary)</span>
          ) : (
            <span className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Inactive (Ternary)</span>
          )}

          {isActive && (
            <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded">⚡ Live (&&)</span>
          )}

          {(() => {
            if (isActive) {
              return <span className="text-emerald-700 border border-emerald-300 px-2 py-0.5 rounded">Online (IIFE)</span>;
            } else {
              return <span className="text-red-500 border border-red-200 px-2 py-0.5 rounded">Offline (IIFE)</span>;
            }
          })()}

        </div>
      </div>

      <button
        onClick={() => onDelete(id)}
        className="bg-red-50 hover:bg-red-100 text-red-600 p-2.5 rounded-xl transition-colors cursor-pointer"
        title="Delete Student"
      >
        {/* Trash Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </button>
    </div>
  );
}