import { useEffect, useState } from 'react';
import API from '../utils/api';
import Navbar from '../components/Navbar';

export default function Orders(){
  const [orders, setOrders] = useState<any[]>([]);
  useEffect(()=>{
    API.get('/orders').then(res => setOrders(res.data)).catch(()=>{});
  }, []);
  return (
    <>
      <Navbar />
      <div className="p-6 container">
        <h2 className="text-2xl font-bold mb-4">Orders</h2>
        <div className="grid grid-cols-1 gap-4">
          {orders.map(o=>(
            <div key={o._id} className="border p-4 rounded bg-white shadow-sm">
              <div><strong>School:</strong> {o.school_id}</div>
              <div><strong>Gateway:</strong> {o.gateway_name}</div>
              <div><strong>Student:</strong> {o.student_info?.name}</div>
            </div>
          ))}
          {orders.length===0 && <div>No orders found</div>}
        </div>
      </div>
    </>
  )
}
