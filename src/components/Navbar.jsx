import {useState} from "react";

export default function Navbar({ totalStudents }) {
  return (
    <nav
      className="h-15 max-w-screen sticky top-0 z-50 flex items-center justify-between border border-border py-4 px-10"
    >
      <h1 className="font-headline font-semibold text-2xl">Student Dashboard</h1>
      <div className="border-border bg-[#F0E8DB] px-4 py-2 border border-[#C4C8BC] rounded-lg">
        <p className="font-body text-sm">Total Students: {totalStudents}</p>
      </div>
    </nav>
  )
}