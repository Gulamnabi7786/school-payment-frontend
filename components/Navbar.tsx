import Link from 'next/link';
import { useEffect, useState } from 'react';
import { logout, getToken } from '../utils/auth';

export default function Navbar() {
  const [auth, setAuth] = useState(false);
  useEffect(() => setAuth(!!getToken()), []);
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container flex justify-between items-center">
        <div className="font-bold">School Payments</div>
        <div className="space-x-4">
          <Link href="/orders">Orders</Link>
          <Link href="/payment">Payments</Link>
          {auth ? (
            <button
              onClick={() => { logout(); window.location.href = '/login'; }}
              className="ml-4 bg-red-500 px-2 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="ml-4">Login</Link>
          )}
        </div>

      </div>
    </nav>
  )
}
