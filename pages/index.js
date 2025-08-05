import '../styles/theme.css';

export default function Home() {
  return (
    <div className="hero">
      <h1>🚀 Welcome to DropStacker Pro</h1>
      <p>
        The AI‑powered dropshipping suite that helps you research winning products,
        connect suppliers, and launch high‑converting stores — all in minutes.
      </p>
      <div>
        <a href="/signup" className="btn-primary">Get Started</a>
        <a href="/login" className="btn-secondary">Login</a>
      </div>
    </div>
  );
    }
