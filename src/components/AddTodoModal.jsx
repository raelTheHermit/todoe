import { useEffect, useRef, useState } from "react";

export default function AddTodoModal({ onClose, onSubmit }) {
    const [title, setTitle] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-neutral-900 p-6 rounded-xl w-full max-w-md space-y-4">

                <h2 className="text-lg font-semibold">Add Todo</h2>

                <input
                    ref={inputRef}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task..."
                    className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
                />

                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 bg-neutral-700 rounded-lg">
                        Cancel
                    </button>

                    <button
                        onClick={() => onSubmit(title)}
                        className="px-4 py-2 bg-white text-black rounded-lg"
                    >
                        Add
                    </button>
                </div>

            </div>
        </div>
    );
}