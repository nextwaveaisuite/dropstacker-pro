// pages/dashboard.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import ProductFinder from '../components/ProductFinder';
import Navigation from '../components/Navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login'); // Redirect to login if not authenticated
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

        {/* Product Finder Module */}
        <ProductFinder />
      </main>
    </div>
  );
}
