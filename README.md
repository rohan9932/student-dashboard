# Student Dashboard Application

A modern, responsive Student Dashboard application built with **React**, **Vite**, and **Tailwind CSS**. This project demonstrates core React architecture principles including state lifting, component composition via children props, controlled form components, multiple conditional rendering methodologies, and error handling with an Error Boundary.

---

## 🚀 Features

- **Dynamic Navbar Counter**: Real-time counter tracks total students dynamically as you add or delete items.
- **Controlled Input Form**: Streamlined, side-by-side single-line registration form utilizing `preventDefault()`.
- **Component Composition**: Uses the React `children` layout design pattern to cleanly nest student cards inside a structural list wrapper.
- **Multiple Conditional Renderings**:
    - Dynamic batch labels ("No Students Found", "Small Batch", "Large Batch") powered by standard conditional routing logic.
    - Custom user active status variations demonstrating **Ternary Operator**, **Logical `&&`**, and **Immediately Invoked Function Expressions (IIFE)**.
- **Robust Error Boundary**: Includes a specialized structural fallback page that isolates runtime crashes gracefully.

---

## 📁 Project Structure

```text
student-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ErrorFallback.jsx
│   │   ├── Navbar.jsx
│   │   ├── StudentCard.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentList.jsx
│   ├── data/
│   │   └── students.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js (or configured inside index.css/vite.config via v4)
└── README.md
```

## 🛠️ Installation & Setup
Follow these quick steps to get the development server up and running locally:

### 1. Clone the Repository
```bash
git clone <your-github-repository-link>
cd student-dashboard
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Once started, open your browser and navigate to the local link provided in your terminal (usually `http://localhost:5173`).

---

## 🧪 Testing the Error Boundary
To verify that the Error Boundary handles intentional application crashes properly without breaking the browser tab environment:

1. Go to the registration form on the page.
2. Type exactly `CRASH_TEST` into the **Student Name** field.
3. Complete the other fields and click **+ Add Student**.
4. The `StudentCard` logic triggers an intentional crash, and the UI immediately swaps over to display the requested fallback notification text: *"Something went wrong. Please reload the application."*