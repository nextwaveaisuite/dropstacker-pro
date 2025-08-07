// pages/profile.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import AuthGuard from '../components/AuthGuard';

export default function Profile() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.email) {
        setEmail(session.user.email);
      }
    };
    fetchUser();
  }, []);

  const updateProfile = async () => {
    setMessage('');
    if (newEmail) {
      const { error } = await supabase.auth.updateUser({ email: newEmail });
      if (error) return setMessage(error.message);
      setMessage('Email updated. Check your inbox to confirm.');
    }

    if (newPassword) {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) return setMessage(error.message);
      setMessage('Password updated successfully.');
    }
  };

  return (
    <AuthGuard>
      <div style={{ backgroundColor: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '12px' }}>
          <h1 style={{ color: '#f5c518', fontSize: '1.8rem', marginBottom: '1rem' }}>👤 Profile Settings</h1>

          <p><strong>Current Email:</strong> {email}</p>

          <div style={{ marginTop: '1rem' }}>
            <label>New Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter new email"
              style={inputStyle}
            />
          </div>

          <div style={{ marginTop: '1rem' }}>
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              style={inputStyle}
            />
          </div>

          <button onClick={updateProfile} style={buttonStyle}>Update Profile</button>

          {message && <p style={{ marginTop: '1rem', color: '#0ff' }}>{message}</p>}
        </main>
      </div>
    </AuthGuard>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  borderRadius: '8px',
  border: '1px solid #555',
  backgroundColor: '#2a2a2a',
  color: '#fff',
};

const buttonStyle = {
  marginTop: '1.5rem',
  backgroundColor: '#f5c518',
  color: '#000',
  padding: '10px 16px',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none',
  width: '100%',
};
