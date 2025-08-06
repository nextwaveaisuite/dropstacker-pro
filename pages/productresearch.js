export default function ProductResearch() {
  const products = [
    { name: "Wireless Earbuds", price: 20, margin: "60%" },
    { name: "Smart Watch", price: 25, margin: "55%" },
    { name: "Yoga Mat", price: 10, margin: "70%" }
  ];

  return (
    <section className="section-dark">
      <div className="container">
        <h1 style={{ color: "#ffbf00" }}>Product Research</h1>
        <div className="grid">
          {products.map((p, i) => (
            <div key={i} className="card" style={{ textAlign: "center" }}>
              <h2 style={{ color: "#0d1b2a" }}>{p.name}</h2>
              <p>Price: ${p.price}</p>
              <p>Margin: {p.margin}</p>
              <button>View Supplier</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
