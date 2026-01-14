"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import clsx from "clsx"

interface PostLinkProps {
    id: number
    title: string
}

export function PostLink({ id, title }: PostLinkProps) {
    const segment = useSelectedLayoutSegment()

    const isActive = segment === String(id)

    return (
        <Link
            href={`/posts/${id}`}
            className={clsx(
                "block px-2 py-1 rounded",
                "hover:bg-gray-100",
                isActive && "bg-blue-100 text-blue-700 font-medium"
            )}
        >
            {title}
        </Link>
    )
}
