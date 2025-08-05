import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Your Dashboard</h1>
      <p>Manage your stores, research products, and connect with suppliers.</p>
      <Link href="/storebuilder"><button>Go to Store Builder</button></Link>
      <Link href="/productresearch"><button style={{ marginLeft: "10px" }}>Product Research</button></Link>
      <Link href="/suppliers"><button style={{ marginLeft: "10px" }}>Supplier Finder</button></Link>
    </div>
  );
}
