import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => {
  try {
    const res = await axios.get(API_URL);
    console.log("RAW:", res.data);

    const sorted = res.data.sort((a, b) => b.id - a.id).slice(0, 10);
    

    return sorted;
  } catch (error) {
    console.error("Error fetching todos:", error);
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
