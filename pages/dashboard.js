// pages/dashboard.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import Navigation from '../components/Navigation';
import ProductFinder from '../components/ProductFinder';
import SupplierConnect from '../components/SupplierConnect';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login'); // Redirect to login if not logged in
      }
    };
    checkSession();
  }, [router]);

  return (
    <div>
      <Navigation />
      <main style={{ padding: '2rem', backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
        <h1 style={{ color: '#f5c518', fontSize: '2rem', marginBottom: '1.5rem' }}>
          🚀 DropStacker Pro Dashboard
        </h1>

        {/* 🔍 Product Research Tool */}
        <ProductFinder />

        <hr style={{ margin: '3rem 0', borderColor: '#333' }} />

        {/* 🔗 Supplier Connection Tool */}
        <SupplierConnect />
      </main>
    </div>
  );
}
