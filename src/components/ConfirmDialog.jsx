export default function ConfirmDialog({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onCancel}
            />

            {/* Modal */}
            <div className="relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-sm shadow-xl space-y-5">

                <p className="text-sm text-neutral-300">
                    {message}
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-sm rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
                    >
                        Delete
                    </button>

                </div>
            </div>
        </div>
    );
}