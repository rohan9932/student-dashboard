import { useState } from 'react';

export default function StudentForm() {
  const [formData, setFormData] = useState({ name: '', dept: '', cgpa: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = { ...formData };
  }

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm mx-20 my-10">
      <h2 className="text-gray-400 text-xs tracking-wider uppercase mb-4 font-bold">Registration</h2>

      <form onSubmit={handleSubmit} className="flex flex-wrap md:flex-nowrap gap-4 items-end">
        {/* Student Name */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-700 text-sm font-medium">Student Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Rahim Ahmed"
            value={formData.name}
            onChange={handleChange}
            className="h-12 px-4 border border-gray-300 rounded-xl text-sm outline-none focus:border-green-700"
          />
        </div>

        {/* Department */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-700 text-sm font-medium">Department</label>
          <input
            type="text"
            name="dept"
            placeholder="e.g. CSE"
            value={formData.dept}
            onChange={handleChange}
            className="h-12 px-4 border border-gray-300 rounded-xl text-sm outline-none focus:border-green-700"
          />
        </div>

        {/* CGPA */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-700 text-sm font-medium">CGPA</label>
          <input
            type="text"
            name="cgpa"
            placeholder="0.00"
            value={formData.cgpa}
            onChange={handleChange}
            className="h-12 px-4 border border-gray-300 rounded-xl text-sm outline-none focus:border-green-700"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="h-12 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm px-6 rounded-xl shrink-0">
          + Add Student
        </button>
      </form>
    </div>
  );
}