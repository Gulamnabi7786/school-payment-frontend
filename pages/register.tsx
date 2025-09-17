// import { useState } from 'react';
// import API from '../utils/api';
// import { useRouter } from 'next/router';

// export default function Register(){
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   async function handleRegister(){
//     try{
//       await API.post('/auth/register', { username, password });
//       alert('Registered. Please login.');
//       router.push('/login');
//     }catch(e:any){
//       alert('Register failed: ' + (e.response?.data?.message || e.message));
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Register</h2>
//         <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className="border w-full p-2 mb-2"/>
//         <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="border w-full p-2 mb-4"/>
//         <button onClick={handleRegister} className="w-full bg-green-600 text-white py-2 rounded">Register</button>
//       </div>
//     </div>
//   )
// }

























// frontend/pages/register.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/axios';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setError('');
    setLoading(true);
    try {
      await api.post('/auth/register', { username, password });
      alert('✅ Registration successful! Please login.');
      router.push('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        
        <input
          type="text"
          placeholder="Username"
          className="border w-full p-2 mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          disabled={loading}
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 disabled:opacity-50"
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
  );
}
