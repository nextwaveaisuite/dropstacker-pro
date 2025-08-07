import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Signup successful! Please check your email to confirm.');
      router.push('/login');
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      <style jsx>{`
        .auth-container {
          max-width: 400px;
          margin: 60px auto;
          padding: 30px;
          border-radius: 12px;
          background: #1c1b18;
          color: #f8cc47;
          box-shadow: 0 0 10px rgba(248, 204, 71, 0.3);
        }
        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: none;
          border-radius: 8px;
        }
        button {
          width: 100%;
          padding: 12px;
          background: #f8cc47;
          color: #000;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        .error {
          color: #ff6b6b;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
