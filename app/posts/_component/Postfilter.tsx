"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function PostFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initial = searchParams.get("q") ?? "";

    const [keyword, setKeyword] = useState(initial);

    function handleSearch() {
        router.push(keyword ? `/posts?q=${keyword}` : "/posts");
    }

    return (
        <div className="mb-6 flex gap-2">
            <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search posts..."
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
            <button
                onClick={handleSearch}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
                Search
            </button>
        </div>
    );
}
