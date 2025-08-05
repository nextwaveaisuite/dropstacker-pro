import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to DropStacker Pro</h1>
      <p>The AI‑powered dropshipping suite to find, build, and launch profitable stores in minutes.</p>
      <Link href="/signup"><button>Get Started</button></Link>
      <Link href="/login"><button style={{ marginLeft: "10px" }}>Login</button></Link>
    </div>
  );
    }
