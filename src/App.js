import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSaveProduct = (newProduct) => {
    if (editingProduct) {
      const updatedProducts = products.map((product) =>
        product.id === editingProduct.id ? { ...product, ...newProduct } : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null); // Clear editing mode
    } else {
      newProduct.id = Math.random(); // Generate unique ID (not suitable for production)
      setProducts([...products, newProduct]);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-4 mb-4">Product Management</h1>
        <ProductForm onSave={handleSaveProduct} editingProduct={editingProduct} />
        <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
      </div>
    </div>
  );
}

export default App;
