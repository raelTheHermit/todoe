import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodo } from "../services/todoService";

export default function TodoDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        getTodo(id).then(setTodo);
    }, [id]);

    if (!todo) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-400">
                Loading task…
            </div>
        );
    }

    return (
        <>
            <div>
                <button
                    onClick={() => navigate(-1)}
                    className="flex  items-center gap-2 text-neutral-400 hover:text-white transition"
                >
                    ← Back
                </button>

                <button
                    onClick={() => navigate("/")}
                    className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-neutral-200 transition"
                >
                    Return Home
                </button>
            </div>
            <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-center p-6">



                <div className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl p-6 space-y-6">

                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs text-neutral-500">Todo #{todo.id}</p>
                            <h1 className="text-xl font-semibold mt-1 leading-snug">
                                {todo.title}
                            </h1>
                        </div>

                        <span
                            className={`text-xs px-3 py-1 rounded-full ${todo.completed
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                                }`}
                        >
                            {todo.completed ? "Completed" : "Pending"}
                        </span>
                    </div>

                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-neutral-800/40 rounded-lg p-3">
                            <p className="text-neutral-500 text-xs">User ID</p>
                            <p className="font-medium">{todo.userId}</p>
                        </div>

                        <div className="bg-neutral-800/40 rounded-lg p-3">
                            <p className="text-neutral-500 text-xs">Todo ID</p>
                            <p className="font-medium">{todo.id}</p>
                        </div>
                    </div>

                    {/* Status Explanation (tiny UX upgrade) */}
                    <div className="text-sm text-neutral-400 leading-relaxed">
                        This task is currently{" "}
                        <span className="text-white font-medium">
                            {todo.completed ? "marked as completed" : "still pending"}
                        </span>
                        . Status updates reflect backend state from JSONPlaceholder.
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between pt-2">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-neutral-400 hover:text-white transition"
                        >
                            ← Back
                        </button>

                        <button
                            onClick={() => navigator.clipboard.writeText(todo.title)}
                            className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-neutral-200 transition"
                        >
                            Copy Title
                        </button>
                    </div>

                </div>
            </div>
        </>

    );
}