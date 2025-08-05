export default function Suppliers() {
  const suppliers = [
    { name: "GlobalTech Imports", location: "China" },
    { name: "EcoGoods", location: "USA" },
    { name: "QuickShip", location: "UK" },
  ];

  return (
    <div className="container">
      <h1>Supplier Finder</h1>
      <div className="grid">
        {suppliers.map((s, i) => (
          <div key={i} className="card">
            <h2>{s.name}</h2>
            <p>Location: {s.location}</p>
            <button>Contact Supplier</button>
          </div>
        ))}
      </div>
    </div>
  );
    }
