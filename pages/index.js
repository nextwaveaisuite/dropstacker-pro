import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="section-dark" style={{
        background: "linear-gradient(135deg, #00b4d8, #0d1b2a)",
        color: "white",
        padding: "4rem 0",
        textAlign: "center"
      }}>
        <div className="container">
          <h1 style={{ fontSize: "2.5rem" }}>DropStacker Pro</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            The AI‑powered dropshipping suite to find, build, and launch profitable stores in minutes.
          </p>
          <Link href="/signup"><button style={{ marginRight: "10px" }}>Get Started</button></Link>
          <Link href="/login"><button>Login</button></Link>
        </div>
      </section>
    </>
  );
  }
