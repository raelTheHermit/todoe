const STORAGE_KEY = "todos_local";

export const getLocalTodos = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveLocalTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const addLocalTodo = (todo) => {
  const current = getLocalTodos();
  const updated = [todo, ...current];
  saveLocalTodos(updated);
  return updated;
};
