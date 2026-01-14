import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");

    const url = new URL("https://jsonplaceholder.typicode.com/posts");

    if (q) {
        url.searchParams.set("q", q);
    }

    const res = await fetch(url.toString(), {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        return NextResponse.json(
            { message: "Failed to fetch posts" },
            { status: 500 }
        );
    }

    const posts = await res.json();
    console.log(posts)
    return NextResponse.json(posts);
}
