import { useState } from 'react';
import API from '../utils/api';
import { useRouter } from 'next/router';

export default function Register(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleRegister(){
    try{
      await API.post('/auth/register', { username, password });
      alert('Registered. Please login.');
      router.push('/login');
    }catch(e:any){
      alert('Register failed: ' + (e.response?.data?.message || e.message));
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className="border w-full p-2 mb-2"/>
        <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="border w-full p-2 mb-4"/>
        <button onClick={handleRegister} className="w-full bg-green-600 text-white py-2 rounded">Register</button>
      </div>
    </div>
  )
}
