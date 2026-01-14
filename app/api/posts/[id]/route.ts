// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";

export const GET = async (
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) => {
    const { id } = await params;

    if (!id) {
        return NextResponse.json(
            { message: "Missing id" },
            { status: 400 }
        );
    }

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        return NextResponse.json(
            { message: "Post not found" },
            { status: 404 }
        );
    }

    const post = await res.json();
    console.log(post)
    return NextResponse.json(post);
}
