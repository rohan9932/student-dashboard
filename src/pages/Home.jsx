import { useState } from 'react';
import Navbar from '../components/Navbar';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import StudentCard from '../components/StudentCard';
import { initialStudents } from '../data/students';

export default function App() {
  const [students, setStudents] = useState(initialStudents);

  // Part 6 & 9: Handler to append a brand new student
  const handleAddStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: Date.now(),
      isActive: true
    };
    setStudents((prevStudents) => [...prevStudents, studentWithId]);
  };

  const handleDeleteStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter(student => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar totalStudents={students.length} />

      <main className="max-w-4xl mx-auto px-4 mt-8 space-y-8">
        <StudentForm onAddStudent={handleAddStudent} />

        <StudentList totalStudents={students.length}>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              department={student.department}
              cgpa={student.cgpa}
              isActive={student.isActive}
              onDelete={handleDeleteStudent}
            />
          ))}
        </StudentList>
      </main>
    </div>
  );
}