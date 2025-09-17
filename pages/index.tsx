import Link from 'next/link'
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">School Payment System</h1>
        <p className="mb-4">Use the links below to start.</p>
        <div className="space-x-3">
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 bg-green-600 text-white rounded">
            Register
          </Link>
        </div>

      </div>
    </div>
  )
}
