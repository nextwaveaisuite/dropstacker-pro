export default function Suppliers() {
  const suppliers = [
    { name: "GlobalTech Imports", location: "China" },
    { name: "EcoGoods", location: "USA" },
    { name: "QuickShip", location: "UK" }
  ];

  return (
    <section className="section-dark">
      <div className="container">
        <h1 style={{ color: "#ffbf00" }}>Supplier Finder</h1>
        <div className="grid">
          {suppliers.map((s, i) => (
            <div key={i} className="card" style={{ textAlign: "center" }}>
              <h2 style={{ color: "#0d1b2a" }}>{s.name}</h2>
              <p>{s.location}</p>
              <button>Contact</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
