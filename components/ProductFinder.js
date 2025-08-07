// components/ProductFinder.js
import React, { useState } from 'react';
import styles from './ProductFinder.module.css';

const demoProducts = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 12.99,
    margin: 68,
    rating: 4.7,
    category: 'Electronics',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Portable Blender',
    price: 24.50,
    margin: 73,
    rating: 4.5,
    category: 'Kitchen',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Yoga Mat Pro',
    price: 18.99,
    margin: 60,
    rating: 4.8,
    category: 'Fitness',
    image: 'https://via.placeholder.com/150',
  },
];

export default function ProductFinder() {
  const [filter, setFilter] = useState('');

  const filtered = filter
    ? demoProducts.filter((p) =>
        p.category.toLowerCase().includes(filter.toLowerCase())
      )
    : demoProducts;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🔥 Winning Product Finder</h2>
      <input
        className={styles.input}
        placeholder="Filter by category (e.g., Fitness, Kitchen)..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className={styles.grid}>
        {filtered.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Profit Margin:</strong> {product.margin}%</p>
            <p><strong>Rating:</strong> {product.rating}⭐</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
