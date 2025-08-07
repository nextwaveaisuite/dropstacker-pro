import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import AuthGuard from '../components/AuthGuard';
import Navigation from '../components/Navigation';
import StoreBuilder from '../components/StoreBuilder';
import SupplierConnect from '../components/SupplierConnect';
import ProductFinder from '../components/ProductFinder';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <AuthGuard>
      <div style={{ backgroundColor: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ padding: '2rem' }}>
          <h1 style={{ color: '#f5c518' }}>🚀 Welcome to DropStacker Pro</h1>
          <p>Your AI-powered dropshipping business suite.</p>
          <p>You're logged in as: <strong>{userEmail}</strong></p>

          {/* ✅ Main Features */}
          <StoreBuilder />
          <SupplierConnect />
          <ProductFinder />
        </main>
      </div>
    </AuthGuard>
  );
};

export default Dashboard;
