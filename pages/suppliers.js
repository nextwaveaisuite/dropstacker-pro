export default function Suppliers() {
  const suppliers = [
    { name: "GlobalTech Imports", location: "China" },
    { name: "EcoGoods", location: "USA" },
    { name: "QuickShip", location: "UK" },
  ];

  return (
    <div className="container">
      <h1>Supplier Finder</h1>
      <ul>
        {suppliers.map((s, i) => (
          <li key={i}>
            {s.name} - {s.location}
          </li>
        ))}
      </ul>
    </div>
  );
    }
