// components/ProductFinder.js

import { useState } from 'react';
import styles from './ProductFinder.module.css';

const mockProducts = [
  {
    id: 1,
    title: 'LED Dog Collar',
    description: 'Keep your dog safe at night with this glowing collar.',
    price: '$12.99',
  },
  {
    id: 2,
    title: 'Posture Corrector',
    description: 'Fix your posture while working or sitting at a desk.',
    price: '$19.99',
  },
  {
    id: 3,
    title: 'Reusable Makeup Remover Pads',
    description: 'Eco-friendly, washable makeup pads.',
    price: '$9.99',
  },
];

export default function ProductFinder() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      // Mock filtering
      const filtered = mockProducts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.finder}>
      <h2>🔍 Find Winning Dropshipping Products</h2>
      <input
        type="text"
        placeholder="e.g. dog hoodie"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading products...</p>}

      <div className={styles.results}>
        {results.map(product => (
          <div key={product.id} className={styles.card}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
          </div>
        ))}

        {results.length === 0 && !loading && <p>No results found.</p>}
      </div>
    </div>
  );
}
