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

















// // frontend/pages/payments.tsx
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import api from '../utils/axios';
// import Navbar from '../components/Navbar';

// export default function PaymentsPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     school_id: '',
//     amount: '',
//     callback_url: '',
//     custom_order_id: '',
//   });
//   const [response, setResponse] = useState<any>(null);
//   const [statusId, setStatusId] = useState('');
//   const [statusResponse, setStatusResponse] = useState<any>(null);
//   const [error, setError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const createPayment = async () => {
//     setError('');
//     setResponse(null);

//     // ✅ Open a blank tab immediately to avoid popup blocker
//     const newTab = window.open('', '_blank');

//     try {
//       const res = await api.post('/payment/create', form);
//       setResponse(res.data);

//       // Support both uppercase/lowercase keys
//       const url = res.data?.Collect_request_url || res.data?.collect_request_url;

//       if (url && newTab) {
//         newTab.location.href = url; // Redirect blank tab
//       } else {
//         newTab?.close();
//       }
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Payment creation failed');
//       newTab?.close();
//     }
//   };

//   const checkStatus = async () => {
//     setError('');
//     setStatusResponse(null);
//     try {
//       const res = await api.get(`/payment/status/${statusId}`);
//       setStatusResponse(res.data);
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Failed to fetch status');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 container mx-auto">
//         <h2 className="text-2xl font-bold mb-4">💳 Payments</h2>

//         {/* Payment Create Form */}
//         <div className="bg-white shadow rounded-lg p-4 mb-6">
//           <h3 className="text-xl font-semibold mb-3">Create Payment</h3>
//           <input
//             name="school_id"
//             value={form.school_id}
//             onChange={handleChange}
//             placeholder="School ID"
//             className="border p-2 rounded w-full mb-3"
//           />
//           <input
//             name="amount"
//             value={form.amount}
//             onChange={handleChange}
//             placeholder="Amount"
//             className="border p-2 rounded w-full mb-3"
//           />
//           <input
//             name="callback_url"
//             value={form.callback_url}
//             onChange={handleChange}
//             placeholder="Callback URL"
//             className="border p-2 rounded w-full mb-3"
//           />
//           <input
//             name="custom_order_id"
//             value={form.custom_order_id}
//             onChange={handleChange}
//             placeholder="Custom Order ID (optional)"
//             className="border p-2 rounded w-full mb-3"
//           />
//           <button
//             onClick={createPayment}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Create Payment
//           </button>

//           {response && (
//             <div className="mt-4 bg-gray-900 text-green-400 rounded-lg shadow-lg p-4 overflow-x-auto">
//               <h4 className="text-white font-semibold mb-2">Payment Response</h4>
//               <pre className="text-sm whitespace-pre-wrap break-all">
//                 {JSON.stringify(response, null, 2)}
//               </pre>
//             </div>
//           )}
//         </div>

//         {/* Check Payment Status */}
//         <div className="bg-white shadow rounded-lg p-4">
//           <h3 className="text-xl font-semibold mb-3">Check Payment Status</h3>
//           <input
//             value={statusId}
//             onChange={(e) => setStatusId(e.target.value)}
//             placeholder="Collect Request ID"
//             className="border p-2 rounded w-full mb-3"
//           />
//           <button
//             onClick={checkStatus}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Check Status
//           </button>

//           {statusResponse && (
//             <div className="mt-4 bg-gray-900 text-blue-400 rounded-lg shadow-lg p-4 overflow-x-auto">
//               <h4 className="text-white font-semibold mb-2">Status Response</h4>
//               <pre className="text-sm whitespace-pre-wrap break-all">
//                 {JSON.stringify(statusResponse, null, 2)}
//               </pre>
//             </div>
//           )}
//         </div>

//         {error && <p className="text-red-500 mt-4">{error}</p>}
//       </div>
//     </>
//   );
// }
































import { useState } from "react";
import { CreditCard, Search, Send, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";
import Navbar from "../components/Navbar";
import api from "../utils/axios";

export default function PaymentsPage() {
  const [paymentData, setPaymentData] = useState({
    school_id: "",
    amount: "",
    callback_url: "",
    custom_order_id: "",
  });
  const [response, setResponse] = useState<any>(null);
  const [statusId, setStatusId] = useState("");
  const [statusResponse, setStatusResponse] = useState<any>(null);
  const [error, setError] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const createPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
    setResponse(null);
    const newTab = window.open("", "_blank");

    try {
      setIsCreating(true);
      const res = await api.post("/payment/create", paymentData);
      setResponse(res.data);
      const url = res.data?.Collect_request_url || res.data?.collect_request_url;
      if (url && newTab) newTab.location.href = url;
      else newTab?.close();
    } catch (err: any) {
      setError(err.response?.data?.message || "Payment creation failed");
      newTab?.close();
    } finally {
      setIsCreating(false);
    }
  };

  const checkStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatusResponse(null);
    try {
      setIsChecking(true);
      const res = await api.get(`/payment/status/${statusId}`);
      setStatusResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch status");
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto space-y-6">

          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">💳 Payments</h1>
            <p className="text-muted-foreground text-lg">
              Create new payments and check transaction status
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Create Payment */}
            <div className="animate-slide-up">
              <Card className="card-elevated">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-2xl">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    Create Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <form onSubmit={createPayment} className="space-y-4">

                    <Input 
                      placeholder="School ID"
                      value={paymentData.school_id}
                      onChange={(e) => handleInputChange("school_id", e.target.value)}
                      className="input-large"
                      required
                    />

                    <Input
                      placeholder="Amount"
                      type="number"
                      value={paymentData.amount}
                      onChange={(e) => handleInputChange("amount", e.target.value)}
                      className="input-large"
                      required
                    />

                    <Input
                      placeholder="Callback URL"
                      value={paymentData.callback_url}
                      onChange={(e) => handleInputChange("callback_url", e.target.value)}
                      className="input-large"
                      required
                    />

                    <Input
                      placeholder="Custom Order ID (optional)"
                      value={paymentData.custom_order_id}
                      onChange={(e) => handleInputChange("custom_order_id", e.target.value)}
                      className="input-large"
                    />

                    <Button type="submit" className="btn-gradient-primary w-full py-6 text-lg" disabled={isCreating}>
                      {isCreating ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Creating Payment...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Create Payment
                        </div>
                      )}
                    </Button>
                  </form>

                  {response && (
                    <div className="mt-4 bg-muted/30 border-2 border-primary/20 rounded-lg p-4 overflow-auto font-mono text-sm">
                      <pre>{JSON.stringify(response, null, 2)}</pre>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Check Status */}
            <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
              <Card className="card-elevated">
                <CardHeader className="bg-gradient-to-r from-secondary/10 to-success/10 rounded-t-2xl">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <Search className="h-6 w-6 text-secondary" />
                    </div>
                    Check Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <form onSubmit={checkStatus} className="space-y-4">
                    <Input
                      placeholder="Collect Request ID"
                      value={statusId}
                      onChange={(e) => setStatusId(e.target.value)}
                      className="input-large"
                      required
                    />

                    <Button type="submit" className="btn-gradient-secondary w-full py-6 text-lg" disabled={isChecking}>
                      {isChecking ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Checking Status...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Search className="h-5 w-5" />
                          Check Status
                        </div>
                      )}
                    </Button>
                  </form>

                  {statusResponse && (
                    <div className="mt-4 bg-muted/30 border-2 border-success/20 rounded-lg p-4 overflow-auto font-mono text-sm">
                      <pre>{JSON.stringify(statusResponse, null, 2)}</pre>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </>
  );
}
