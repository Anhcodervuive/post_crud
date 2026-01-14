"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="mx-auto max-w-3xl px-4 py-8">
            <p className="mb-4 text-red-600">{error.message}</p>
            <button
                onClick={reset}
                className="rounded-md bg-red-600 px-4 py-2 text-white"
            >
                Retry
            </button>
        </div>
    );
}
