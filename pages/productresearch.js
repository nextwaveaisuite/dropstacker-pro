export default function ProductResearch() {
  const sampleProducts = [
    { name: "Wireless Earbuds", price: 20, margin: "60%" },
    { name: "Smart Watch", price: 25, margin: "55%" },
    { name: "Yoga Mat", price: 10, margin: "70%" },
  ];

  return (
    <div className="container">
      <h1>Product Research</h1>
      <ul>
        {sampleProducts.map((p, i) => (
          <li key={i}>
            {p.name} - ${p.price} - Margin: {p.margin}
          </li>
        ))}
      </ul>
    </div>
  );
    }
