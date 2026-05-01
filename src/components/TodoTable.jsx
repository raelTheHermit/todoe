import { useNavigate } from "react-router-dom";

export default function TodoTable({ todos, onDelete }) {
    const navigate = useNavigate();

    return (

        <table className="w-full text-sm">
            <thead className="text-neutral-400 border-b border-neutral-800">
                <tr>
                    <th className="text-left px-4 py-3">Task</th>
                    <th>Status</th>
                    <th className="text-right px-4">Actions</th>
                </tr>
            </thead>

            <tbody>
                {todos.map((todo) => (
                    <tr
                        key={todo.id}
                        className="border-b border-neutral-800 hover:bg-neutral-800/50 transition"
                    >
                        <td
                            onClick={() => navigate(`/todo/${todo.id}`)}
                            className="px-4 py-3 cursor-pointer"
                        >
                            {todo.title}
                        </td>

                        <td>
                            <span
                                className={`text-xs px-2 py-1 rounded-full ${todo.completed
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                                    }`}
                            >
                                {todo.completed ? "Done" : "Pending"}
                            </span>
                        </td>

                        <td className="text-right px-4 space-x-3">
                            <button
                                onClick={() => navigate(`/todo/${todo.id}`)}
                                className="text-neutral-400 hover:text-white"
                            >
                                View
                            </button>

                            <button
                                onClick={() => onDelete(todo.id)}
                                className="text-neutral-500 hover:text-red-400"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};