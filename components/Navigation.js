// components/Navigation.js

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

const Navigation = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <nav style={{ backgroundColor: '#111', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link href="/dashboard" style={{ color: '#f5c518', marginRight: '1.5rem' }}>🏠 Dashboard</Link>
        <Link href="/storebuilder" style={{ color: '#f5c518', marginRight: '1.5rem' }}>🛠 Store Builder</Link>
        <Link href="/productresearch" style={{ color: '#f5c518', marginRight: '1.5rem' }}>🔍 Product Research</Link>
        <Link href="/suppliers" style={{ color: '#f5c518' }}>🤝 Supplier Finder</Link>
      </div>
      <div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#f5c518',
            color: '#111',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}
        >
          🚪 Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
