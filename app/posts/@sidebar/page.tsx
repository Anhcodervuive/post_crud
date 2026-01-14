import Link from "next/link"
import { fetchJSON } from "@/app/lib/fetcher"
import type { Post } from "@/app/types/post"

export default async function Sidebar() {
    const posts = await fetchJSON<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
    )

    return (
        <div>
            <h3 className="font-bold text-black mb-2">Recent</h3>
            <ul className="space-y-1 text-sm">
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        <Link
                            href={`/posts/${post.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
