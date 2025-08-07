// components/StoreBuilder.js
import React, { useState } from 'react';
import styles from './StoreBuilder.module.css';

export default function StoreBuilder() {
  const [step, setStep] = useState(1);
  const [storeName, setStoreName] = useState('');
  const [productName, setProductName] = useState('');
  const [customText, setCustomText] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleLaunch = () => {
    alert(`🚀 Store "${storeName}" launched with product "${productName}"`);
    setStep(1);
    setStoreName('');
    setProductName('');
    setCustomText('');
  };

  return (
    <div className={styles.container}>
      <h2>🛠️ Store Builder</h2>

      {step === 1 && (
        <div className={styles.step}>
          <label>Store Name:</label>
          <input value={storeName} onChange={(e) => setStoreName(e.target.value)} />
          <label>Product Name:</label>
          <input value={productName} onChange={(e) => setProductName(e.target.value)} />
          <button onClick={nextStep}>Next ➡️</button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step}>
          <label>Customize Description:</label>
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            rows={4}
          />
          <div className={styles.controls}>
            <button onClick={prevStep}>⬅️ Back</button>
            <button onClick={nextStep}>Next ➡️</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.step}>
          <h3>✅ Ready to Launch</h3>
          <p><strong>Store:</strong> {storeName}</p>
          <p><strong>Product:</strong> {productName}</p>
          <p><strong>Description:</strong> {customText}</p>
          <div className={styles.controls}>
            <button onClick={prevStep}>⬅️ Back</button>
            <button onClick={handleLaunch} className={styles.launch}>🚀 Launch Store</button>
          </div>
        </div>
      )}
    </div>
  );
}
