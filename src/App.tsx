// src/App.tsx
import React from 'react';
import Header from './components/Header';
import InvoiceGrid from './components/InvoiceGrid';

const App: React.FC = () => (
  <div>
    <Header />
    <InvoiceGrid />
  </div>
);

export default App;
