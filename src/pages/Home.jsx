import { useEffect, useState } from "react";
import { getTodos, deleteTodo, createTodo } from "../services/todoService";
import TodoTable from "../components/TodoTable";
import AddTodoModal from "../components/AddTodoModal";
import ConfirmDialog from "../components/ConfirmDialog"

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        const loadTodos = async () => {
            const data = await getTodos();
            setTodos(data);
            const filtered = data.filter(todo => todo.userId === 1);
            setTodos(filtered);
        };
        loadTodos();
    }, []);

    const handleAdd = async (title) => {
        const newTodo = await createTodo({ title, completed: false });
        setTodos([newTodo, ...todos]);
        setShowModal(false);
    };

    const handleDelete = async () => {
        await deleteTodo(deleteId);
        setTodos(todos.filter(t => t.id !== deleteId));
        setDeleteId(null);
    };

    return (
        <div>
            <h1 className="mx-2 my-3 tracking-tight text-2xl">Todos</h1>

            <button onClick={() => setShowModal(true)} className="bg-neutral-400 p-2 rounded-4xl border-2 border-neutral-700">Add Todo</button>

            <TodoTable todos={todos} onDelete={(id) => setDeleteId(id)} />

            {showModal && (
                <AddTodoModal
                    onClose={() => setShowModal(false)}
                    onSubmit={handleAdd}
                />
            )}

            {deleteId && (
                <ConfirmDialog
                    message="Are you sure?"
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteId(null)}
                />
            )}
        </div>
    );
}