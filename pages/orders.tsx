// import { useEffect, useState } from 'react';
// import API from '../utils/api';
// import Navbar from '../components/Navbar';

// export default function Orders(){
//   const [orders, setOrders] = useState<any[]>([]);
//   useEffect(()=>{
//     API.get('/orders').then(res => setOrders(res.data)).catch(()=>{});
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="p-6 container">
//         <h2 className="text-2xl font-bold mb-4">Orders</h2>
//         <div className="grid grid-cols-1 gap-4">
//           {orders.map(o=>(
//             <div key={o._id} className="border p-4 rounded bg-white shadow-sm">
//               <div><strong>School:</strong> {o.school_id}</div>
//               <div><strong>Gateway:</strong> {o.gateway_name}</div>
//               <div><strong>Student:</strong> {o.student_info?.name}</div>
//             </div>
//           ))}
//           {orders.length===0 && <div>No orders found</div>}
//         </div>
//       </div>
//     </>
//   )
// }
























// frontend/pages/orders.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/axios';
import Navbar from '../components/Navbar';

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // redirect if not logged in
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await api.get('/orders');
        setOrders(res.data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          router.push('/login');
        } else {
          setError(err.response?.data?.message || 'Failed to fetch orders');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="p-6 container mx-auto">
        <h2 className="text-2xl font-bold mb-4">📦 Orders</h2>

        {loading && <p>Loading orders...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <p><strong>School ID:</strong> {order.school_id}</p>
              <p><strong>Gateway:</strong> {order.gateway_name || 'N/A'}</p>
              <p><strong>Student:</strong> {order.student_info?.name}</p>
              <p><strong>Created:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>

        {!loading && orders.length === 0 && (
          <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </>
  );
}
