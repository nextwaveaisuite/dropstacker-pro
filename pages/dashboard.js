import Link from "next/link";

export default function Dashboard() {
  const widgets = [
    { title: "Store Builder", link: "/storebuilder", desc: "Build your online store with AI-powered tools." },
    { title: "Product Research", link: "/productresearch", desc: "Find winning products with high profit margins." },
    { title: "Supplier Finder", link: "/suppliers", desc: "Connect with trusted global suppliers." }
  ];

  return (
    <div className="container">
      <h1>Your Dashboard</h1>
      <div className="grid">
        {widgets.map((w, i) => (
          <div key={i} className="card">
            <h2>{w.title}</h2>
            <p>{w.desc}</p>
            <Link href={w.link}><button>Open</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
                      }
