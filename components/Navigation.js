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
    <nav style={{
      backgroundColor: '#1a1a1a',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff'
    }}>
      <h2 style={{ color: '#f5c518', margin: 0 }}>DropStacker Pro</h2>
      <div>
        <Link href="/dashboard">
          <span style={{ marginRight: '1.5rem', cursor: 'pointer' }}>Dashboard</span>
        </Link>
        <button onClick={handleLogout} style={{
          backgroundColor: '#f5c518',
          color: '#000',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
