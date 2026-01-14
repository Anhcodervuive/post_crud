import Link from "next/link";
import { PostFilter } from "./_component/Postfilter";

type Post = {
    id: number;
    title: string;
    body: string;
};

export default async function PostsPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const { q } = await searchParams;
    const query = q ?? "";
    const url = q
        ? `http://localhost:3000/api/posts?q=${query}`
        : `http://localhost:3000/api/posts`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const posts: Post[] = await res.json();

    return (
        <div className="mx-auto max-w-3xl px-4 py-8">
            <h1 className="mb-4 text-2xl font-semibold">Posts</h1>

            <PostFilter />

            <ul className="divide-y divide-gray-200">
                {posts.map((post) => (
                    <li key={post.id} className="py-4">
                        <Link
                            href={`/posts/${post.id}`}
                            className="text-blue-400 hover:text-blue-600"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
