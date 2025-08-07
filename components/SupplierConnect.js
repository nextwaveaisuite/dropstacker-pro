// components/SupplierConnect.js
import React from 'react';
import styles from './SupplierConnect.module.css';

const suppliers = [
  {
    id: 1,
    name: 'AliExpress – Wireless Earbuds',
    platform: 'AliExpress',
    rating: 4.7,
    link: 'https://www.aliexpress.com/item/1005001234567890.html',
    message: `Hello, I'm interested in dropshipping this product. Can you provide shipping details and MOQ?`,
  },
  {
    id: 2,
    name: 'CJ Dropshipping – LED Strip Lights',
    platform: 'CJ Dropshipping',
    rating: 4.5,
    link: 'https://app.cjdropshipping.com/product-detail.html?id=1005009876543210',
    message: `Hi, I'm building a dropshipping store. Can you confirm inventory and shipping times?`,
  },
];

export default function SupplierConnect() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Message copied to clipboard!');
  };

  return (
    <div className={styles.container}>
      <h2>🔗 Supplier Connect</h2>
      <div className={styles.grid}>
        {suppliers.map((supplier) => (
          <div key={supplier.id} className={styles.card}>
            <h3>{supplier.name}</h3>
            <p><strong>Platform:</strong> {supplier.platform}</p>
            <p><strong>Rating:</strong> ⭐ {supplier.rating}</p>
            <a href={supplier.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Visit Supplier Page
            </a>
            <button onClick={() => handleCopy(supplier.message)} className={styles.button}>
              📋 Copy Inquiry Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
