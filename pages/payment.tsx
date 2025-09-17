// import { useState } from 'react';
// import API from '../utils/api';
// import Navbar from '../components/Navbar';

// export default function Payment(){
//   const [school_id, setSchoolId] = useState('65b0e6293e9f76a9694d84b4');
//   const [amount, setAmount] = useState('100');
//   const [callback_url, setCallbackUrl] = useState('https://google.com');
//   const [custom_order_id, setCustomOrderId] = useState('');

//   async function handleSubmit(){
//     try{
//       const res = await API.post('/payment/create', { school_id, amount, callback_url, custom_order_id });
//       alert('Payment created: ' + JSON.stringify(res.data));
//     }catch(e:any){
//       alert('Create payment failed: ' + (e.response?.data?.message || e.message));
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 container">
//         <h2 className="text-2xl font-bold mb-4">Create Payment</h2>
//         <div className="space-y-2 max-w-md">
//           <input value={school_id} onChange={e=>setSchoolId(e.target.value)} placeholder="School ID" className="border w-full p-2"/>
//           <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount" className="border w-full p-2"/>
//           <input value={callback_url} onChange={e=>setCallbackUrl(e.target.value)} placeholder="Callback URL" className="border w-full p-2"/>
//           <input value={custom_order_id} onChange={e=>setCustomOrderId(e.target.value)} placeholder="Custom Order ID" className="border w-full p-2"/>
//           <button onClick={handleSubmit} className="bg-green-600 text-white py-2 px-4 rounded">Create</button>
//         </div>
//       </div>
//     </>
//   )
// }

















// // pages/payment.tsx
// import { useState } from 'react';
// import api from '../utils/axios';

// export default function Payment() {
//   const [amount, setAmount] = useState('');
//   const [response, setResponse] = useState(null);

//   const createPayment = async () => {
//     try {
//       const res = await api.post('/payment/create', {
//         school_id: 'SCH001',
//         amount,
//         callback_url: 'https://google.com',
//         custom_order_id: 'ORDER123',
//       });
//       setResponse(res.data);
//     } catch (err: any) {
//       setResponse(err.response?.data || err.message);
//     }
//   };

//   return (
//     <div className="p-4">
//       <input
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder="Enter Amount"
//         className="border p-2"
//       />
//       <button onClick={createPayment} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
//         Pay
//       </button>
//       <pre>{JSON.stringify(response, null, 2)}</pre>
//     </div>
//   );
// }

















// frontend/pages/payments.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/axios';
import Navbar from '../components/Navbar';

export default function PaymentsPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    school_id: '',
    amount: '',
    callback_url: '',
    custom_order_id: '',
  });
  const [response, setResponse] = useState<any>(null);
  const [statusId, setStatusId] = useState('');
  const [statusResponse, setStatusResponse] = useState<any>(null);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createPayment = async () => {
    setError('');
    setResponse(null);

    // ✅ Open a blank tab immediately to avoid popup blocker
    const newTab = window.open('', '_blank');

    try {
      const res = await api.post('/payment/create', form);
      setResponse(res.data);

      // Support both uppercase/lowercase keys
      const url = res.data?.Collect_request_url || res.data?.collect_request_url;

      if (url && newTab) {
        newTab.location.href = url; // Redirect blank tab
      } else {
        newTab?.close();
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Payment creation failed');
      newTab?.close();
    }
  };

  const checkStatus = async () => {
    setError('');
    setStatusResponse(null);
    try {
      const res = await api.get(`/payment/status/${statusId}`);
      setStatusResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch status');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 container mx-auto">
        <h2 className="text-2xl font-bold mb-4">💳 Payments</h2>

        {/* Payment Create Form */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h3 className="text-xl font-semibold mb-3">Create Payment</h3>
          <input
            name="school_id"
            value={form.school_id}
            onChange={handleChange}
            placeholder="School ID"
            className="border p-2 rounded w-full mb-3"
          />
          <input
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="border p-2 rounded w-full mb-3"
          />
          <input
            name="callback_url"
            value={form.callback_url}
            onChange={handleChange}
            placeholder="Callback URL"
            className="border p-2 rounded w-full mb-3"
          />
          <input
            name="custom_order_id"
            value={form.custom_order_id}
            onChange={handleChange}
            placeholder="Custom Order ID (optional)"
            className="border p-2 rounded w-full mb-3"
          />
          <button
            onClick={createPayment}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create Payment
          </button>

          {response && (
            <div className="mt-4 bg-gray-900 text-green-400 rounded-lg shadow-lg p-4 overflow-x-auto">
              <h4 className="text-white font-semibold mb-2">Payment Response</h4>
              <pre className="text-sm whitespace-pre-wrap break-all">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Check Payment Status */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3">Check Payment Status</h3>
          <input
            value={statusId}
            onChange={(e) => setStatusId(e.target.value)}
            placeholder="Collect Request ID"
            className="border p-2 rounded w-full mb-3"
          />
          <button
            onClick={checkStatus}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Check Status
          </button>

          {statusResponse && (
            <div className="mt-4 bg-gray-900 text-blue-400 rounded-lg shadow-lg p-4 overflow-x-auto">
              <h4 className="text-white font-semibold mb-2">Status Response</h4>
              <pre className="text-sm whitespace-pre-wrap break-all">
                {JSON.stringify(statusResponse, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </>
  );
}
