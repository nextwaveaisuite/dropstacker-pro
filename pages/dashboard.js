// pages/dashboard.js
import React from 'react';
import Navigation from '../components/Navigation';
import AuthGuard from '../components/AuthGuard';
import ProductFinder from '../components/ProductFinder';
import SupplierConnect from '../components/SupplierConnect';
import StoreBuilder from '../components/StoreBuilder';

export default function Dashboard() {
  return (
    <AuthGuard>
      <div style={{ backgroundColor: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#f5c518', marginBottom: '1rem' }}>📊 Dashboard</h1>
          
          <section style={{ marginBottom: '2rem' }}>
            <ProductFinder />
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <SupplierConnect />
          </section>

          <section>
            <StoreBuilder />
          </section>
        </main>
      </div>
    </AuthGuard>
  );
}
