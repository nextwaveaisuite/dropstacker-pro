import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push('/login'); // Redirect to login if not logged in
      } else {
        setUser(user);
      }
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (!user) return null; // Hide content while loading

  return (
    <div className="dashboard">
      <h1>Welcome to DropStacker Pro</h1>
      <p>👋 Logged in as: <strong>{user.email}</strong></p>

      <div className="actions">
        <button onClick={() => router.push('/storebuilder')}>🚀 Go to Store Builder</button>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <style jsx>{`
        .dashboard {
          max-width: 600px;
          margin: 60px auto;
          padding: 40px;
          background: #1c1b18;
          color: #f8cc47;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 0 20px rgba(248, 204, 71, 0.15);
        }
        .actions {
          margin-top: 30px;
        }
        button {
          margin: 10px;
          padding: 12px 24px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          background: #f8cc47;
          color: #000;
          cursor: pointer;
        }
        button:hover {
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}
