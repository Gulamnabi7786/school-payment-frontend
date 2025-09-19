// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import api from '../utils/axios';

// export default function Dashboard() {
//   const [user, setUser] = useState<any>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       router.push('/login');
//       return;
//     }

//     api.get('/users/me')
//       .then(res => setUser(res.data))
//       .catch(() => router.push('/login'));
//   }, []);

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold">Dashboard</h1>
//       {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// }


























import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/axios';
import Navbar from '../components/Navbar'

import {
  CreditCard, Package, TrendingUp, CheckCircle,
  BarChart3, Users, Settings, Home, Search, Bell, User
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [selectedNav, setSelectedNav] = useState("dashboard");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    api.get('/users/me')
      .then(res => setUser(res.data))
      .catch(() => router.push('/dashboard'));
  }, []);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
    { id: "orders", label: "Orders", icon: Package, href: "/orders" },
    { id: "payments", label: "Payments", icon: CreditCard, href: "/payment" },
    { id: "analytics", label: "Analytics", icon: BarChart3, href: "/analytics" },
    { id: "students", label: "Students", icon: Users, href: "/students" },
    { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
  ];

  const stats = [
    { title: "Total Payments", value: "$12,426", icon: CreditCard, change: "+12.5%", color: "primary" },
    { title: "Orders", value: "1,247", icon: Package, change: "+8.2%", color: "secondary" },
    { title: "Transactions", value: "2,158", icon: TrendingUp, change: "+15.3%", color: "accent" },
    { title: "Success Rate", value: "98.5%", icon: CheckCircle, change: "+2.1%", color: "success" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border p-6 animate-fade-in shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SchoolPay</h2>
          <p className="text-muted-foreground text-sm">Payment Dashboard</p>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedNav(item.id); // keep active state
                router.push(item.href);   // navigate to page
              }}
              className={`sidebar-item w-full text-left flex items-center gap-2 p-2 ${selectedNav === item.id ? "active bg-blue-100 rounded-lg" : "hover:bg-blue-50 rounded-lg"
                }`}
            >
              <item.icon className="h-5 w-5 text-blue-600" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <Navbar />

        {/* Dashboard Content */}
        <main className="flex-1 p-6 animate-slide-up space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.title} className="card-elevated animate-scale-in shadow-lg rounded-xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-lg bg-${stat.color}/10`}>
                    <stat.icon className={`h-4 w-4 text-${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-success">{stat.change} from last month</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Transactions */}
          <Card className="card-elevated shadow-lg rounded-xl">
            <CardHeader><CardTitle>Recent Transactions</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {user ? (
                <pre>{JSON.stringify(user, null, 2)}</pre>
              ) : (
                <p>Loading...</p>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
