export default function LoadingPosts() {
    return (
        <div className="space-y-3">
            <h1 className="text-2xl font-semibold">Posts</h1>

            <ul className="space-y-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <li
                        key={index}
                        className="h-5 bg-gray-200 rounded"
                    />
                ))}
            </ul>
        </div>
    )
}