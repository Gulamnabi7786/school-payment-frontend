import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/axios';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    api.get('/users/me')
      .then(res => setUser(res.data))
      .catch(() => router.push('/login'));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
