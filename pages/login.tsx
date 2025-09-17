// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import api from '../utils/axios';

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       const res = await api.post('/auth/login', { username, password });
//       localStorage.setItem('token', res.data.access_token);
//       router.push('/orders');
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="p-10 flex flex-col items-center">
//       <h1 className="text-xl font-bold mb-4">Login</h1>
//       <input
//         className="border p-2 mb-2"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         className="border p-2 mb-2"
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Login
//       </button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// }


















import { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../utils/axios'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const year = new Date().getFullYear()

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { username, password })
      localStorage.setItem('token', res.data.access_token)
      router.push('/orders')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-50 via-white to-blue-50">
      {/* Main Login Card */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center transform transition hover:scale-105">
          <h1 className="text-3xl font-extrabold mb-6 text-blue-700">Login</h1>

          <input
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition"
          >
            Login
          </button>

          {error && <p className="text-red-500 mt-3">{error}</p>}
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
