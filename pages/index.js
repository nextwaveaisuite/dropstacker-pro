import Link from "next/link";

export default function Home() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1>🚀 Welcome to DropStacker Pro</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        The AI‑powered dropshipping suite that helps you research winning products,
        connect suppliers, and launch high‑converting stores — all in minutes.
      </p>
      <Link href="/signup">
        <button style={{ marginRight: "10px" }}>Get Started</button>
      </Link>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  );
          }
