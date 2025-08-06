import { useState } from "react";

export default function StoreBuilder() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  function addProduct() {
    if (!newProduct.trim()) return;
    setProducts([...products, { name: newProduct }]);
    setNewProduct("");
  }

  return (
    <section className="section-dark">
      <div className="container">
        <h1 style={{ color: "#ffbf00" }}>Store Builder</h1>
        <div className="card" style={{ marginBottom: "2rem" }}>
          <input type="text" placeholder="Product Name" value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)} />
          <button onClick={addProduct} style={{ marginTop: "0.5rem" }}>Add Product</button>
        </div>
        <div className="grid">
          {products.map((p, i) => (
            <div key={i} className="card" style={{ textAlign: "center" }}>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
