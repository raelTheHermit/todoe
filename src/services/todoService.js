import axios from "axios";
import { getLocalTodos  } from "../localStor";
const API_URL = "https://jsonplaceholder.typicode.com/todos";


export const getTodos = async () => {
  try {
    const res = await axios.get(API_URL);

    const apiTodos = res.data;

    const localTodos = getLocalTodos();

    const combined = [...localTodos, ...apiTodos];

    return combined.sort((a, b) => b.id - a.id).slice(0, 10);
  } catch (error) {
    console.error(error);
    return [];
  }
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
