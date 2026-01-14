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
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );

    if (!res.ok) {
        return NextResponse.json(
            { message: "Failed to fetch comments" },
            { status: 500 }
        );
    }

    const data = await res.json();
    return NextResponse.json(data);
}
