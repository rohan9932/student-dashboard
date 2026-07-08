import { useState } from 'react';

export default function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({ name: '', dept: '', cgpa: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // Part 6: Prevent page refresh
    e.preventDefault();

    if (!formData.name || !formData.dept || !formData.cgpa) return;

    // Send data upward to App.jsx state handler
    onAddStudent({
      name: formData.name,
      department: formData.dept,
      cgpa: parseFloat(formData.cgpa) || 0.00
    });

    // Reset input fields cleanly
    setFormData({ name: '', dept: '', cgpa: '' });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      <h2 className="text-gray-400 text-xs tracking-wider uppercase mb-4 font-bold">Registration</h2>

      <form onSubmit={handleSubmit} className="flex flex-wrap md:flex-nowrap gap-4 items-end">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-700 text-sm font-medium">Student Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Rahim Ahmed"
            value={formData.name}
            onChange={handleChange}
            className="h-12 px-4 border border-gray-300 rounded-xl text-sm outline-none focus:border-emerald-700"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-700 text-sm font-medium">Department</label>
          <input
            type="text"
            name="dept"
            required
            placeholder="e.g. CSE"
            value={formData.dept}
            onChange={handleChange}
            className="h-12 px-4 border border-gray-300 rounded-xl text-sm outline-none focus:border-emerald-700"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-700 text-sm font-medium">CGPA</label>
          <input
            type="number"
            step="0.01"
            name="cgpa"
            required
            placeholder="0.00"
            value={formData.cgpa}
            onChange={handleChange}
            className="h-12 px-4 border border-gray-300 rounded-xl text-sm outline-none focus:border-emerald-700"
          />
        </div>

        <button type="submit" className="h-12 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm px-6 rounded-xl shrink-0 cursor-pointer transition-colors">
          + Add Student
        </button>
      </form>
    </div>
  );
}