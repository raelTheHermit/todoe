import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data.slice(-10); // Limit (return only the first 10 items)
};

export const getTodo = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createTodo = async (todo) => {
  const res = await axios.post(API_URL, todo);
  return res.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
