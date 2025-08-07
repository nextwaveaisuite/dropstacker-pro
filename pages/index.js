// pages/index.js
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
      <Navigation />
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#f5c518', marginBottom: '1rem' }}>
          🚀 Welcome to DropStacker Pro
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#b3b3b3', maxWidth: '600px', margin: '0 auto 2rem' }}>
          The AI‑powered dropshipping suite that helps you research winning products,
          connect suppliers, and launch high‑converting stores — all in minutes.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/signup">
            <button style={buttonStylePrimary}>Get Started</button>
          </Link>
          <Link href="/login">
            <button style={buttonStyleSecondary}>Login</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

const buttonStylePrimary = {
  backgroundColor: '#f5c518',
  color: '#000',
  padding: '0.75rem 2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const buttonStyleSecondary = {
  backgroundColor: 'transparent',
  color: '#f5c518',
  padding: '0.75rem 2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  border: '2px solid #f5c518',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};
