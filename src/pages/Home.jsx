import { useEffect, useState } from "react";
import { addLocalTodo } from "../localStor";
import { getTodos, deleteTodo } from "../services/todoService";
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

    const handleAdd = (title) => {
        if (!title.trim()) return;

        const newTodo = {
            id: Date.now(),
            userId: 1,
            title,
            completed: false,
        };

        addLocalTodo(newTodo);

        setTodos(prev => [newTodo, ...prev]);

        setShowModal(false);
    };


    
    const handleDelete = async () => {
        setDeleteId(null); // close instantly

        await deleteTodo(deleteId);

        setTodos(prev => prev.filter(t => t.id !== deleteId));
    };

    return (
        <>
            <div className="bg-neutral-950 text-white">

                <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">

                    {/* Hero */}
                    <div className="space-y-4">

                        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            Stay on top of your tasks
                        </h1>

                        <p className="text-neutral-400 max-w-xl text-sm md:text-base">
                            A minimal task manager to help you focus on what matters.
                            Add, track, and manage your todos without distractions.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition"
                            >
                                + Add Todo
                            </button>

                            <span className="text-xs text-neutral-500">
                                {todos.length} tasks loaded
                            </span>
                        </div>

                    </div>

                </div>

            </div>
            <div className="min-h-screen bg-neutral-950 text-white p-6">
                <div className="max-w-5xl mx-auto space-y-6">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Todosk
                        </h1>

                        
                    </div>

                    {/* Table Container */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">

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

                </div>
            </div>

        </>
    );
}