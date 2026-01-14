import { NextResponse } from "next/server";

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ id: string; commentId: string }> }
) {
    const { commentId } = await params;


    const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );

    if (!res.ok) {
        return NextResponse.json(
            { message: "Comment not found" },
            { status: 404 }
        );
    }

    const data = await res.json();
    return NextResponse.json(data);
}
