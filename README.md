# Todo App (React + Vite)

This is a simple single-page Todo application built with React. The goal of the project was to practice working with APIs, managing state, and structuring a small frontend application with a clean UI.

## Overview

The app allows users to:
- View a list of todos
- Add new todos using a modal form
- View details of a specific todo
- Delete todos with confirmation

The data is fetched from the JSONPlaceholder API:
https://jsonplaceholder.typicode.com/todos

Since this is a mock API, it does not persist changes, so newly added or deleted todos only exist in the app state.

---

## Tech Stack

- React (with hooks)
- Vite (for fast development setup)
- Tailwind CSS (for styling)
- Axios (for API requests)
- React Router (for navigation)

---

## Project Structure

```

src/
│
├── components/
│   ├── TodoTable.jsx
│   ├── AddTodoModal.jsx
│   └── ConfirmDelete.jsx
│
├── pages/
│   ├── Home.jsx
│   └── TodoDetail.jsx
│
├── services/
│   └── todoService.js
│
├── App.jsx
└── main.jsx

````

---

## How I Built It

### 1. API Layer

I created a service file (`todoService.js`) to handle all API calls using Axios. This includes:
- Fetching all todos
- Fetching a single todo
- Creating a todo
- Deleting a todo

This helped separate data logic from UI components.

---

### 2. State Management

I used React's `useState` and `useEffect` hooks.

- `useEffect` is used to fetch todos when the Home page loads
- `useState` is used to store todos and UI states like modals

One issue I ran into was stale state when adding todos, which I fixed by using a functional state update:

```js
setTodos(prev => [newTodo, ...prev]);
````

---

### 3. Displaying Todos

Todos are displayed in a table layout using a reusable `TodoTable` component.

I implemented:

* Status display (Completed / Pending)
* Action buttons (View and Delete)
* Hover states for better UX

I also limited the displayed todos to the last 10 by sorting them by ID and slicing the array.

---

### 4. Adding Todos

Clicking the "Add Todo" button opens a modal with a form.

* The form collects a title
* On submit, it calls the API and updates local state
* The new todo is added to the top of the list

I also added basic validation to prevent empty todos.

---

### 5. Viewing a Single Todo

Each todo has a "View" button that navigates to a detail page using React Router.

The detail page:

* Fetches the todo by ID
* Displays its title, status, and metadata
* Includes navigation controls to go back

---

### 6. Deleting Todos

Each todo has a delete option that:

* Opens a confirmation modal
* Calls the delete API
* Removes the todo from local state

Since the API is mock, deletion only affects the UI.

---

### 7. UI and Styling

I used Tailwind CSS for styling.

Some UI decisions:

* A dark theme for better contrast
* Card-based layout for structure
* Status badges for quick visual feedback
* A hero section to introduce the app and highlight the main action

I tried to keep the design minimal but structured, focusing on clarity and usability.

---

## Challenges I Faced

* Understanding that JSONPlaceholder does not persist data
* Debugging issues caused by filtering and slicing data incorrectly
* Managing state updates correctly after async operations
* Making the UI feel structured instead of just functional

---

## What I Learned

* How to structure a React app with separation of concerns
* How to work with APIs using Axios
* Importance of data flow and state management
* How small UI decisions affect usability
* Debugging data issues by tracing API → state → render

---

## Possible Improvements

If I had more time, I would:

* Add persistent storage (real backend or localStorage)
* Implement editing of todos
* Add loading states and skeletons
* Improve accessibility
* Add user-based filtering properly

---

## Running the Project

```bash
npm install
npm run dev
```

---

## Final Notes

This project helped me better understand how frontend applications handle data and user interactions. While the functionality is simple, I focused on making the structure clean and the UI usable.
