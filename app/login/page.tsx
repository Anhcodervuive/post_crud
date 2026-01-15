import { loginAction } from '@/app/actions/auth'

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                action={loginAction}
                className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md"
            >
                <h1 className="mb-6 text-center text-2xl font-semibold">
                    Login
                </h1>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium text-black">
                        Username
                    </label>
                    <input
                        name="username"
                        required
                        className="w-full rounded border px-3 py-2 text-sm text-blue-400 focus:border-blue-800 focus:outline-none"
                        placeholder="Enter username"
                    />
                </div>

                <div className="mb-6">
                    <label className="mb-1 block text-sm font-medium text-black">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        required
                        className="w-full rounded border px-3 py-2 text-sm text-blue-400 focus:border-blue-800 focus:outline-none"
                        placeholder="Enter password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
