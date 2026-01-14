// app/posts/[id]/page.tsx
import Link from "next/link";

type Post = {
    id: number;
    title: string;
    body: string;
};

export default async function PostDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const res = await fetch(
        `http://localhost:3000/api/posts/${id}`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch post detail");
    }

    const post: Post = await res.json();

    return (
        <div className="mx-auto max-w-3xl px-4 py-8">
            <Link
                href="/posts"
                className="mb-4 inline-block text-sm text-blue-600 hover:underline"
            >
                ← Back to posts
            </Link>

            <h1 className="mb-4 text-2xl text-blue-400 font-semibold">
                {post.title}
            </h1>

            <p className="text-blue-400">{post.body}</p>
        </div>
    );
}
