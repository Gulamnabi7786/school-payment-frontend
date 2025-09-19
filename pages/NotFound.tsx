// pages/NotFound.js
import { Analytics } from "@vercel/analytics/next"
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
      <Analytics />
        <button style={{ marginTop: '20px', padding: '10px 20px' }}>
          Go Home
        </button>
      </Link>
    </div>
  );
}
