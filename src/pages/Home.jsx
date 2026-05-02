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
            // const filtered = data.filter(todo => todo.userId === 1);
            // setTodos(filtered);
        };
        loadTodos();
    }, []);

    const handleAdd = async (title) => {
        if (!title.trim()) return;

        try {
            const newTodo = await createTodo({
                userId: 11, // or whatever user you’re simulating
                title,
                completed: false,
            });

            setTodos(prev => [newTodo, ...prev]);
            setShowModal(false);

        } catch (error) {
            console.error("Failed to add todo:", error);
        }
    };

    const handleDelete = async () => {
        await deleteTodo(deleteId);
        setTodos(todos.filter(t => t.id !== deleteId));
        setDeleteId(null);
    };

    return (
        <>
        <div className="min-h-screen bg-neutral-950 text-white p-6">
  <div className="max-w-5xl mx-auto space-y-6">

    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold tracking-tight">
        Todos
      </h1>

      <button
        onClick={() => setShowModal(true)}
        className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition"
      >
        + Add Todo
      </button>
    </div>

    {/* Table Container */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
      <TodoTable todos={todos} onDelete={setDeleteId} />
    </div>

  </div>
</div>
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
        </>
    );
}