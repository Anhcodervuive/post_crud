import Link from 'next/link'

type Props = {
    params: {
        slug: string[]
    }
}

type Comment = {
    postId: string,
    id: string,
    name: string,
    email: string,
    body: string
}

export default async function PostExplorePage({ params }: Props) {
    const { slug } = await params
    const [postId, section, commentId] = slug


    // Fetch post
    const post = await fetch(
        `http://localhost:3000/api/posts/${postId}`,
    ).then(res => res.json())

    // Default: overview
    let content = (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <Link href={`/posts/explore/${postId}/comments`}>
                View comments
            </Link>
        </>
    )

    // /comments
    if (section === 'comments' && !commentId) {
        const comments = await fetch(
            `http://localhost:3000/api/posts/${postId}/comments`
        ).then(res => res.json())

        content = (
            <>
                <h2 className='text-blue-500 text-xl font-bold'>Comments of Post {postId}</h2>
                <ul>
                    {comments.map((c: Comment, index: number) => (
                        <li key={c.id}>
                            <Link href={`/posts/explore/${postId}/comments/${c.id}`}>
                                {index + 1}. {c.email}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }

    // /comments/[id]
    if (section === 'comments' && commentId) {
        const comment = await fetch(
            `http://localhost:3000/api/posts/${postId}/comments/${commentId}`
        ).then(res => res.json())

        content = (
            <>
                <h2 className='text-blue-500 text-xl font-bold'>Comment Detail</h2>
                <p><strong>{comment.email}</strong></p>
                <p>{comment.body}</p>

                <Link href={`/posts/explore/${postId}/comments`} className=''>
                    Back to comments
                </Link>
            </>
        )
    }

    return (
        <div style={{ padding: 24 }}>
            {content}
        </div>
    )
}
