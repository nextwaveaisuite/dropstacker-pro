import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import Navigation from '../components/Navigation';
import StoreBuilder from '../components/StoreBuilder';
import SupplierConnect from '../components/SupplierConnect';

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login');
      } else {
        setUser(session.user);
      }
    });
  }, [router]);

  return (
    <div style={{ backgroundColor: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
      <Navigation />
      <main style={{ padding: '2rem' }}>
        <h1 style={{ color: '#f5c518' }}>🚀 Welcome to DropStacker Pro</h1>
        <p>Your AI-powered dropshipping business suite.</p>
        <StoreBuilder />
        <SupplierConnect />
      </main>
    </div>
  );
};

export default Dashboard;
