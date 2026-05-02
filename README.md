# 📝 React Todo App

A simple single-page Todo application built with React, Axios, and Tailwind CSS.  
It interacts with the JSONPlaceholder API and demonstrates core frontend concepts like state management, API integration, routing, and UI design.

---

## 🚀 Features

-  Displays todos in a table layout
-  Add new todos via modal form
-  View detailed todo page
-  Delete todos with confirmation popup
-  Fetch data using Axios
-  Responsive UI with Tailwind CSS
-  Optimistic UI updates (local state handling)

---

##  Tech Stack

- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
Install dependencies:
Bash
npm install
Run development server:
Bash
npm run dev

---

Key Concepts Demonstrated
1. State Management
Uses React useState and useEffect for managing todos and UI state.
2. API Integration
All API calls are handled using Axios in a dedicated service file.

export const getTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

3. Component
Presentational components (UI only)
Page components (logic + layout)
Service layer (API abstraction)

4. Routing
React Router handles navigation:
/ → Todo list
/todo/:id → Todo detail page

5. UX Decisions
Modal-based todo creation
Confirmation before deletion
Status badges for quick scanning
Minimal dark UI for focus

🧪 Known Limitations
No persistent backend (mock API limitation)
Newly created todos exist only in local state
No authentication system
No real-time sync