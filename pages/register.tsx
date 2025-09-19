// // import { useState } from 'react';
// // import API from '../utils/api';
// // import { useRouter } from 'next/router';

// // export default function Register(){
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const router = useRouter();

// //   async function handleRegister(){
// //     try{
// //       await API.post('/auth/register', { username, password });
// //       alert('Registered. Please login.');
// //       router.push('/login');
// //     }catch(e:any){
// //       alert('Register failed: ' + (e.response?.data?.message || e.message));
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
// //         <h2 className="text-xl font-bold mb-4">Register</h2>
// //         <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className="border w-full p-2 mb-2"/>
// //         <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="border w-full p-2 mb-4"/>
// //         <button onClick={handleRegister} className="w-full bg-green-600 text-white py-2 rounded">Register</button>
// //       </div>
// //     </div>
// //   )
// // }

























// // frontend/pages/register.tsx
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import api from '../utils/axios';

// export default function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleRegister = async () => {
//     setError('');
//     setLoading(true);
//     try {
//       await api.post('/auth/register', { username, password });
//       alert('✅ Registration successful! Please login.');
//       router.push('/login');
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Register</h2>
        
//         <input
//           type="text"
//           placeholder="Username"
//           className="border w-full p-2 mb-3 rounded"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="border w-full p-2 mb-3 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={handleRegister}
//           disabled={loading}
//           className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 disabled:opacity-50"
//         >
//           {loading ? 'Registering...' : 'Register'}
//         </button>

//         {error && <p className="text-red-500 mt-3">{error}</p>}

//         <p className="mt-4 text-sm text-gray-600">
//           Already have an account?{' '}
//           <span
//             onClick={() => router.push('/login')}
//             className="text-blue-600 cursor-pointer hover:underline"
//           >
//             Login here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }




















import { Analytics } from "@vercel/analytics/next"
import { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../utils/axios'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const year = new Date().getFullYear()

  const handleRegister = async () => {
    setError('')
    setLoading(true)
    try {
      await api.post('/auth/register', { username, password })
      alert('✅ Registration successful! Please login.')
      router.push('/login')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-50 via-white to-green-50">
      {/* Main Card */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center transform transition hover:scale-105">
          <Analytics />
          <h2 className="text-3xl font-extrabold mb-6 text-green-700">Register</h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition disabled:opacity-50"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>

          {error && <p className="text-red-500 mt-3">{error}</p>}

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <span
              onClick={() => router.push('/login')}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
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
