import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import API from '../../utils/api';
import Navbar from '../../components/Navbar';

export default function Status(){
  const router = useRouter();
  const { id } = router.query;
  const [status, setStatus] = useState<any>(null);

  useEffect(()=>{
    if(!id) return;
    API.get(`/payment/status/${id}`).then(res => setStatus(res.data)).catch(()=>{});
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="p-6 container">
        <h2 className="text-2xl font-bold mb-4">Payment Status</h2>
        <pre className="bg-white p-4 rounded shadow-sm">{JSON.stringify(status, null, 2)}</pre>
      </div>
    </>
  )
}
