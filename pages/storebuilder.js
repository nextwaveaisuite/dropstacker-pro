export default function StoreBuilder() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <h1 style={{ color: '#0A3D62' }}>🛍 Store Builder</h1>
      <p>Import products, customize your store, and publish in minutes.</p>
      <div style={{ marginTop: '2rem' }}>
        <button style={{ marginRight: '1rem', padding: '0.8rem 1.5rem', backgroundColor: '#0A3D62', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Add Product
        </button>
        <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#FFC107', border: 'none', cursor: 'pointer' }}>
          Publish Store
        </button>
      </div>
    </div>
  );
}
