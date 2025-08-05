import { useState } from "react";

export default function StoreBuilder() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  function addProduct() {
    if (newProduct.trim() === "") return;
    setProducts([...products, { name: newProduct }]);
    setNewProduct("");
  }

  return (
    <div className="container">
      <h1>Store Builder</h1>
      <input type="text" placeholder="Product Name" value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>

      <h2>Products</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
    }
