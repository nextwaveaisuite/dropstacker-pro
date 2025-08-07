import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import AuthGuard from '../components/AuthGuard';
import Navigation from '../components/Navigation';
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
      <Navigation />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to DropStacker Pro</h1>
        <p>You’re logged in as: <strong>{userEmail}</strong></p>

        {/* ✅ Product Finder Component */}
        <ProductFinder />
      </main>
    </AuthGuard>
  );
};

export default Dashboard;
