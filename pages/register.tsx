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




















// import { Analytics } from "@vercel/analytics/next"
// import { useState } from 'react'
// import { useRouter } from 'next/router'
// import api from '../utils/axios'

// export default function RegisterPage() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const router = useRouter()
//   const year = new Date().getFullYear()

//   const handleRegister = async () => {
//     setError('')
//     setLoading(true)
//     try {
//       await api.post('/auth/register', { username, password })
//       alert('✅ Registration successful! Please login.')
//       router.push('/login')
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Registration failed')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-50 via-white to-green-50">
//       {/* Main Card */}
//       <div className="flex-grow flex items-center justify-center">
//         <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center transform transition hover:scale-105">
//           <Analytics />
//           <h2 className="text-3xl font-extrabold mb-6 text-green-700">Register</h2>

//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onClick={handleRegister}
//             disabled={loading}
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition disabled:opacity-50"
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>

//           {error && <p className="text-red-500 mt-3">{error}</p>}

//           <p className="mt-4 text-sm text-gray-600">
//             Already have an account?{' '}
//             <span
//               onClick={() => router.push('/login')}
//               className="text-blue-600 cursor-pointer hover:underline"
//             >
//               Login here
//             </span>
//           </p>
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








































import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Image from "next/image";
import registerImage from "../assets/register-education-success.jpg";
import { useRouter } from "next/router";
import api from "../utils/axios";

export default function RegisterPage() {
  const router = useRouter();
  const year = new Date().getFullYear();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await api.post("/auth/register", {
        username: formData.name,
        email: formData.email,
        password: formData.password
      });
      alert("✅ Registration successful! Please login.");
      router.push("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen hero-warm flex items-center justify-center p-6 bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Illustration */}
        <div className="hidden lg:block animate-slide-up text-center">
          <div className="space-y-6">
            <Image
              src={registerImage}
              alt="Education success illustration"
              className="rounded-2xl shadow-lg"
              width={500}
              height={500}
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Join Our Community</h2>
              <p className="text-white/80">
                Create your account and start managing school payments with ease
              </p>
            </div>
          </div>
        </div>

        {/* Register Form */}
        <div className="animate-fade-in">
          <Card className="card-elevated max-w-md mx-auto">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-secondary to-success bg-clip-text text-transparent">
                Create Account
              </CardTitle>
              <p className="text-muted-foreground">Sign up for your school payment account</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name as username"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="input-large pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@school.edu"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="input-large pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="input-large pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="input-large pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="mt-1 rounded border-input"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <span className="text-primary cursor-pointer hover:text-primary/80">Terms of Service</span>{" "}
                    and{" "}
                    <span className="text-primary cursor-pointer hover:text-primary/80">Privacy Policy</span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="btn-gradient-warm w-full text-lg py-6" disabled={loading}>
                  {loading ? "Registering..." : "Create Account"}
                </Button>

                {/* Error Message */}
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                {/* Already have account */}
                <div className="text-center">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <span
                    onClick={() => router.push("/login")}
                    className="text-primary cursor-pointer hover:text-primary/80 transition-colors font-medium"
                  >
                    Sign in here
                  </span>
                </div>
              </form>
            </CardContent>
          </Card>
          {/* Footer */}
          <footer className="w-full text-center py-4 mt-6 bg-gray-100 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              © {year} Developed by <span className="font-semibold">Gulamnabi</span>
            </p>
          </footer>
        </div>
      </div>

    </div>
  );
}
