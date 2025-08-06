import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("user", email);
    router.push("/dashboard");
  }

  return (
    <section className="section-dark" style={{ textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "500px" }}>
        <h1 style={{ color: "#ffbf00" }}>Login to DropStacker Pro</h1>
        <form onSubmit={handleLogin} style={{ marginTop: "1.5rem" }}>
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" style={{ width: "100%", marginTop: "1rem" }}>Login</button>
        </form>
      </div>
    </section>
  );
}
