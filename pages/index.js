import Link from "next/link";

export default function Home() {
  return (
    <section className="section-dark" style={{ textAlign: "center" }}>
      <div className="container">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          <span style={{ color: "#ffbf00" }}>Welcome to DropStacker Pro</span>
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "650px", margin: "0 auto 2rem" }}>
          The AI‑powered dropshipping suite that helps you research winning products,
          connect suppliers, and launch high‑converting stores — all in minutes.
        </p>
        <Link href="/signup">
          <button style={{ marginRight: "10px" }}>Get Started</button>
        </Link>
        <Link href="/login">
          <a style={{ color: "#ffbf00", fontWeight: "600" }}>Login</a>
        </Link>
      </div>
    </section>
  );
}
