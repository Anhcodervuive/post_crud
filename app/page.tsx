import Link from "next/link"


export const metadata = {
  title: "Demo App",
}


export default function HomePage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          Next.js App Router Demo
        </h1>
        <p className="text-gray-700 mt-1">
          This application demonstrates routing, data fetching,
          and layout composition using Next.js App Router.
        </p>
      </div>


      <section className="flex gap-4">
        <Link
          href="/posts"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Posts
        </Link>
      </section>
    </div>
  )
}
