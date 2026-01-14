
export default function PostsLayout({
    children,
    sidebar,
    modal,
}: {
    children: React.ReactNode
    sidebar: React.ReactNode
    modal: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-[280px] bg-white border-r p-4">
                {sidebar}
            </aside>

            <main className="flex-1 p-6">
                {children}
                {modal ? modal : null}
            </main>
        </div>
    )
}
