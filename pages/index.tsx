import Link from 'next/link'

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-blue-50 via-white to-blue-50">
      
      {/* Main content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg text-center transform transition hover:scale-105">
          <h1 className="text-3xl font-extrabold mb-4 text-blue-700">
            Edviron 🔥
          </h1>
          <p className="mb-6 text-gray-600">
            Use the links below to get started.
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              href="/login"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-4 bg-gray-100 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          © {year} Developed by <span className="font-semibold">Gulamnabi</span>
        </p>
        <div className="mt-2 space-x-4">
          <a
            href="https://www.linkedin.com/in/devgulamnabi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://devgulamnabi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Portfolio
          </a>
        </div>
      </footer>
    </div>
  )
}
