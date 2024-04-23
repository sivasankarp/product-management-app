import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ProductForm = ({ onSave, editingProduct }) => {
  const initialFormData = {
    description: '',
    canExpire: false,
    expiryDate: '',
    category: '',
    price: '',
    isOnSpecial: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        description: editingProduct.description,
        canExpire: editingProduct.canExpire,
        expiryDate: editingProduct.expiryDate,
        category: editingProduct.category,
        price: editingProduct.price,
        isOnSpecial: editingProduct.isOnSpecial,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: editingProduct ? editingProduct.id : Math.random() });
    setFormData(initialFormData);
  };

  return (
    <div>
      <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Description:
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" required/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Can Expire:
          </Form.Label>
          <Col sm="9">
            <Form.Check
              type="checkbox"
              label="Yes"
              name="canExpire"
              checked={formData.canExpire}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        {formData.canExpire && (
          <Form.Group as={Row}>
            <Form.Label column sm="3">
              Expiry Date:
            </Form.Label>
            <Col sm="9">
              <Form.Control type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
            </Col>
          </Form.Group>
        )}
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Category:
          </Form.Label>
          <Col sm="9">
                <Form.Select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="All">All</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Meat">Meat</option>
                    <option value="Furniture">Furniture</option>
                </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Price:
          </Form.Label>
          <Col sm="9">
            <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            On Special:
          </Form.Label>
          <Col sm="9">
            <Form.Check
              type="checkbox"
              label="Yes"
              name="isOnSpecial"
              checked={formData.isOnSpecial}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <div className="text-right">
          <Button variant="primary" type="submit">
            {editingProduct ? 'Edit Changes' : 'Save Products'}
          </Button>
        </div>
      </Form>
        <hr/>
    </div>
  );
};

export default ProductForm;
