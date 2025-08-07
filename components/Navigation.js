// components/Navigation.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Navigation() {
  const router = useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <Link href="/" style={linkStyle}><strong>🚀 DropStacker Pro</strong></Link>
      </div>
      <ul style={navListStyle}>
        <li><Link href="/" style={linkStyle}>Home</Link></li>
        <li><Link href="/dashboard" style={linkStyle}>Dashboard</Link></li>
        <li><Link href="/storebuilder" style={linkStyle}>Store Builder</Link></li>
        {session && <li><Link href="/profile" style={linkStyle}>Profile</Link></li>}
        {!session && <li><Link href="/login" style={linkStyle}>Login</Link></li>}
        {session && <li><button onClick={handleLogout} style={buttonStyle}>Logout</button></li>}
      </ul>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#0f0f0f',
  padding: '1rem 2rem',
  borderBottom: '1px solid #222',
};

const logoStyle = {
  fontSize: '1.2rem',
  color: '#f5c518',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1.5rem',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: '#0ff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const buttonStyle = {
  backgroundColor: '#f5c518',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  padding: '6px 12px',
  cursor: 'pointer',
  fontWeight: 'bold',
};
