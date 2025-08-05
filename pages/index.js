export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0A3D62', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#FFC107' }}>🚀 Welcome to DropStacker Pro</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          The AI‑powered dropshipping suite that helps you research winning products, connect suppliers, and launch high‑converting stores — all in minutes.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="/signup" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#FFC107', color: '#000', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
            Get Started
          </a>
          <a href="/login" style={{ marginLeft: '1rem', color: '#FFC107', textDecoration: 'underline' }}>
            Login
          </a>
        </div>
      </header>
    </div>
  );
  }
