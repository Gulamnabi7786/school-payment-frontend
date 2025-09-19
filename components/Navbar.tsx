import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Edviron</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/orders" className="hover:underline">
          Orders
        </Link>
        <Link href="/login" className="hover:underline">
          Logout
        </Link>
      </div>
    </nav>
  )
}
