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


















// import { useState } from 'react'
// import { useRouter } from 'next/router'
// import api from '../utils/axios'

// export default function LoginPage() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const router = useRouter()
//   const year = new Date().getFullYear()

//   const handleLogin = async () => {
//     try {
//       const res = await api.post('/auth/login', { username, password })
//       localStorage.setItem('token', res.data.access_token)
//       router.push('/orders')
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Login failed')
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-50 via-white to-blue-50">
//       {/* Main Login Card */}
//       <div className="flex-grow flex items-center justify-center">
//         <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center transform transition hover:scale-105">
//           <h1 className="text-3xl font-extrabold mb-6 text-blue-700">Login</h1>

//           <input
//             className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <input
//             className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition"
//           >
//             Login
//           </button>

//           {error && <p className="text-red-500 mt-3">{error}</p>}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="w-full text-center py-4 bg-gray-100 border-t border-gray-200">
//         <p className="text-sm text-gray-600">
//           © {year} Developed by <span className="font-semibold">Gulamnabi</span>
//         </p>
//         <div className="mt-2 space-x-4">
//           <a
//             href="https://www.linkedin.com/in/devgulamnabi/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://devgulamnabi.vercel.app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Portfolio
//           </a>
//         </div>
//       </footer>
//     </div>
//   )
// }









































"use client"
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react"
import api from '../utils/axios'
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import loginImage from "../assets/login-students-books.jpg"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  // const [email, setEmail] = useState("")
  const [username, setUsername] = useState('')
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const year = new Date().getFullYear()

  const handleSubmit = async () => {
    // Simple demo login - redirect to dashboard
    try {
      const res = await api.post('/auth/login', { username, password })
      localStorage.setItem('token', res.data.access_token)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Login Form */}
        <div className="animate-fade-in">
          <Analytics />
          <Card className="card-elevated max-w-md mx-auto">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <p className="text-muted-foreground">
                Sign in to your school payment account
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@school.edu"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="input-large pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-large pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {error && <p className="text-red-500 mt-3">{error}</p>}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input id="remember" type="checkbox" className="rounded border-input" />
                    <label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="btn-gradient-primary w-full text-lg py-6"
                >
                  Sign In
                </Button>

                <div className="text-center">
                  <span className="text-muted-foreground">Don&apos;t have an account? </span>
                  <Link
                    href="/register"
                    className="text-primary hover:text-primary/80 transition-colors font-medium story-link"
                  >
                    Register here
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Illustration */}
        <div className="hidden lg:block animate-slide-up">
          <div className="text-center space-y-6">
            <Image
              src={loginImage}
              alt="Students with books illustration"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Secure School Payments</h2>
              <p className="text-white/80">
                Safe, fast, and reliable payment processing for students and families
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
