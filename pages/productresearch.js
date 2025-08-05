export default function ProductResearch() {
  const sampleProducts = [
    { name: "Wireless Earbuds", price: 20, margin: "60%" },
    { name: "Smart Watch", price: 25, margin: "55%" },
    { name: "Yoga Mat", price: 10, margin: "70%" },
  ];

  return (
    <div className="container">
      <h1>Product Research</h1>
      <div className="grid">
        {sampleProducts.map((p, i) => (
          <div key={i} className="card">
            <h2>{p.name}</h2>
            <p>Price: ${p.price}</p>
            <p>Margin: {p.margin}</p>
            <button>View Supplier</button>
          </div>
        ))}
      </div>
    </div>
  );
    }
