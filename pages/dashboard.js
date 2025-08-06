import Link from "next/link";

export default function Dashboard() {
  const features = [
    { title: "Store Builder", desc: "Build your online store with AI-powered tools.", link: "/storebuilder" },
    { title: "Product Research", desc: "Find high-margin winning products fast.", link: "/productresearch" },
    { title: "Supplier Finder", desc: "Connect with trusted global suppliers.", link: "/suppliers" }
  ];

  return (
    <section className="section-dark">
      <div className="container">
        <h1 style={{ color: "#ffbf00", textAlign: "center" }}>Your Dashboard</h1>
        <div className="grid" style={{ marginTop: "2rem" }}>
          {features.map((f, i) => (
            <div key={i} className="card" style={{ textAlign: "center" }}>
              <h2 style={{ color: "#0d1b2a" }}>{f.title}</h2>
              <p>{f.desc}</p>
              <Link href={f.link}>
                <button>Open</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
