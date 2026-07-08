import {useState} from "react";

export default function Navbar() {
  const [studentNo, setStudentNo] = useState(10);

  return (
    <nav className="h-15 max-w-screen sticky top-0 z-50 flex items-center justify-between border border-border p-4">
      <h1 className="font-headline font-semibold text-2xl">Student Dashboard</h1>
      <p>Total Students: {studentNo}</p>
    </nav>
  )
}