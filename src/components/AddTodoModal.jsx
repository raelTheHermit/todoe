import { useState } from "react";

export default function AddTodoModal({ onClose, onSubmit }) {
    const [title, setTitle] = useState("");

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-neutral-50 border border-neutral-800 rounded-xl p-6 w-full max-w-md">

                <h2 className="text-lg font-medium mb-4">New Todo</h2>

                <input
                    className="w-full bg-neutral-800 border border-neutral-50 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="What needs to be done?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="text-neutral-400 hover:border-neutral-400 border border- px-4 py-2 rounded-xl">
                        Cancel
                    </button>

                    <button
                        onClick={() => onSubmit(title)}
                        className="bg-white text-black px-4 py-2 rounded-lg"
                    >
                        Add
                    </button>
                </div>

            </div>
        </div>
    );
}