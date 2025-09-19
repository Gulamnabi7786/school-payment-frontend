// // import { useEffect, useState } from 'react';
// // import API from '../utils/api';
// // import Navbar from '../components/Navbar';

// // export default function Orders(){
// //   const [orders, setOrders] = useState<any[]>([]);
// //   useEffect(()=>{
// //     API.get('/orders').then(res => setOrders(res.data)).catch(()=>{});
// //   }, []);
// //   return (
// //     <>
// //       <Navbar />
// //       <div className="p-6 container">
// //         <h2 className="text-2xl font-bold mb-4">Orders</h2>
// //         <div className="grid grid-cols-1 gap-4">
// //           {orders.map(o=>(
// //             <div key={o._id} className="border p-4 rounded bg-white shadow-sm">
// //               <div><strong>School:</strong> {o.school_id}</div>
// //               <div><strong>Gateway:</strong> {o.gateway_name}</div>
// //               <div><strong>Student:</strong> {o.student_info?.name}</div>
// //             </div>
// //           ))}
// //           {orders.length===0 && <div>No orders found</div>}
// //         </div>
// //       </div>
// //     </>
// //   )
// // }
























// // frontend/pages/orders.tsx
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import api from '../utils/axios';
// import Navbar from '../components/Navbar';

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       router.push('/login'); // redirect if not logged in
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const res = await api.get('/orders');
//         setOrders(res.data);
//       } catch (err: any) {
//         if (err.response?.status === 401) {
//           localStorage.removeItem('token');
//           router.push('/login');
//         } else {
//           setError(err.response?.data?.message || 'Failed to fetch orders');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [router]);

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 container mx-auto">
//         <h2 className="text-2xl font-bold mb-4">📦 Orders</h2>

//         {loading && <p>Loading orders...</p>}
//         {error && <p className="text-red-500">{error}</p>}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition"
//             >
//               <p><strong>School ID:</strong> {order.school_id}</p>
//               <p><strong>Gateway:</strong> {order.gateway_name || 'N/A'}</p>
//               <p><strong>Student:</strong> {order.student_info?.name}</p>
//               <p><strong>Created:</strong> {new Date(order.createdAt).toLocaleString()}</p>
//             </div>
//           ))}
//         </div>

//         {!loading && orders.length === 0 && (
//           <p className="text-gray-600">No orders found.</p>
//         )}
//       </div>
//     </>
//   );
// }








// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import api from '../utils/axios'
// import Navbar from '../components/Navbar'

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')
//   const router = useRouter()

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       router.push('/login') // redirect if not logged in
//       return
//     }

//     const fetchOrders = async () => {
//       try {
//         const res = await api.get('/orders')
//         setOrders(res.data)
//       } catch (err: any) {
//         if (err.response?.status === 401) {
//           localStorage.removeItem('token')
//           router.push('/login')
//         } else {
//           setError(err.response?.data?.message || 'Failed to fetch orders')
//         }
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchOrders()
//   }, [router])

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 container mx-auto">
//         <h2 className="text-3xl font-extrabold mb-6 text-blue-700 flex items-center">
//           📦 Orders
//         </h2>

//         {loading && <p className="text-gray-500">Loading orders...</p>}
//         {error && <p className="text-red-500">{error}</p>}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="relative border border-gray-200 bg-white rounded-2xl shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-lg"
//             >
//               {/* Decorative gradient border */}
//               <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-200 to-green-200 -z-10"></div>

//               <h3 className="text-lg font-bold text-gray-800 mb-2">
//                 🏫 {order.school_id}
//               </h3>

//               <p className="text-gray-600 mb-1">
//                 <span className="font-semibold">Gateway:</span>{' '}
//                 {order.gateway_name || 'N/A'}
//               </p>
//               <p className="text-gray-600 mb-1">
//                 <span className="font-semibold">Student:</span>{' '}
//                 {order.student_info?.name}
//               </p>
//               <p className="text-gray-600 mb-3">
//                 <span className="font-semibold">Created:</span>{' '}
//                 {new Date(order.createdAt).toLocaleString()}
//               </p>

//               {/* Example status badge if available */}
//               {order.status && (
//                 <span
//                   className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
//                     order.status === 'paid'
//                       ? 'bg-green-100 text-green-700'
//                       : 'bg-yellow-100 text-yellow-700'
//                   }`}
//                 >
//                   {order.status.toUpperCase()}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>

//         {!loading && orders.length === 0 && (
//           <p className="text-gray-600 text-center mt-6">No orders found.</p>
//         )}
//       </div>
//     </>
//   )
// }



















import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import api from '../utils/axios'
import Navbar from '../components/Navbar'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Search, User, CreditCard, Calendar, Plus, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    const fetchOrders = async () => {
      try {
        const res = await api.get('/orders')
        setOrders(res.data)
      } catch (err: any) {
        if (err.response?.status === 401) {
          localStorage.removeItem('token')
          router.push('/login')
        } else {
          setError(err.response?.data?.message || 'Failed to fetch orders')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [router])

  const filteredOrders = orders.filter(order => {
    const term = searchTerm.toLowerCase()
    const matchesSearch =
      order.school_id?.toLowerCase().includes(term) ||
      order.student_info?.name?.toLowerCase().includes(term) ||
      order.gateway_name?.toLowerCase().includes(term)
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'paid': return 'badge-success'
      case 'pending': return 'badge-warning'
      case 'failed': return 'badge-error'
      default: return 'badge-muted'
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto space-y-6">

          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Orders Management</h1>
            <p className="text-muted-foreground text-lg">Track and manage all school payment orders</p>
          </div>

          {/* Filters and Actions */}
          <Card className="card-elevated animate-slide-up">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search orders, students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-64"
                    />
                  </div>

                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    More Filters
                  </Button>
                </div>

                <Button className="btn-gradient-primary gap-2">
                  <Plus className="h-4 w-4" />
                  Create Order
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Orders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrders.map((order, index) => (
              <Card 
                key={order._id} 
                className="card-elevated hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold">{order.school_id}</CardTitle>
                      <p className="text-sm text-muted-foreground">{order.student_info?.name}</p>
                    </div>
                    <span className={getStatusBadge(order.status)}>
                      {order.status?.toUpperCase()}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{order.student_info?.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{order.gateway_name || 'N/A'}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{new Date(order.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      Edit Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No orders message */}
          {!loading && filteredOrders.length === 0 && (
            <Card className="card-elevated">
              <CardContent className="p-12 text-center">
                <div className="text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No orders found</h3>
                  <p>Try adjusting your search criteria or filters</p>
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </div>
    </>
  )
}
