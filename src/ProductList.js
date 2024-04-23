import React, { useState } from 'react';
import { ListGroup, Button, Form, Row, Col } from 'react-bootstrap';
import './ProductList.css'; // Import custom CSS file
import Stack from 'react-bootstrap/Stack';

const ProductList = ({ products, onEdit, onDelete }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory === 'All' ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <h2>Product List</h2>
      <Form.Group>
        <Form.Label>Filter by Category:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
          <option value="Furniture">Furniture</option>
          {/* Add more options for other categories */}
        </Form.Control>
      </Form.Group>
      <Row className="custom-row">
        {filteredProducts.map((product) => (
          <Col key={product.id} md={12}>
            <Stack direction="horizontal" gap={3} spacing={2} className="col-md-5 mx-auto">
                    <div className="p-2"> <strong>{product.description}</strong></div>
                    <div className="p-2 ms-auto">{product.canExpire && <p>Expiry Date: {product.expiryDate}</p>}
            <p>{product.isOnSpecial ? 'On Special!' : 'Regular Price'}</p></div>
                    <div className="vr" />
                    <div className="p-2">
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <Button variant="primary" onClick={() => onEdit(product)}>
                            Edit
                            </Button>{' '}
                            <Button variant="danger" onClick={() => onDelete(product.id)}>
                            Delete
                            </Button>
                    </div>
                </Stack>
          </Col>
        ))}
      </Row>
      <hr/>
    </div>
  );
};

export default ProductList;
