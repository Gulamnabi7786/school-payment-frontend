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

















// pages/payment.tsx
import { useState } from 'react';
import api from '../utils/axios';

export default function Payment() {
  const [amount, setAmount] = useState('');
  const [response, setResponse] = useState(null);

  const createPayment = async () => {
    try {
      const res = await api.post('/payment/create', {
        school_id: 'SCH001',
        amount,
        callback_url: 'https://google.com',
        custom_order_id: 'ORDER123',
      });
      setResponse(res.data);
    } catch (err: any) {
      setResponse(err.response?.data || err.message);
    }
  };

  return (
    <div className="p-4">
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
        className="border p-2"
      />
      <button onClick={createPayment} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
        Pay
      </button>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
