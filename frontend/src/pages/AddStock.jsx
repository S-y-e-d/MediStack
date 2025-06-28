import React, { useState } from 'react';
import axios from 'axios';

function AddStock() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    manufacturer: '',
    batchNumber: '',
    quantityInStock: 0,
    reorderLevel: 0,
    unitPrice: 0.0,
    purchasePrice: 0.0,
    purchaseDate: '',
    expirationDate: '',
    storageLocation: '',
    supplierInfo: '',
    status: '',
    lastNotified: ''
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the POST request to your Spring Boot backend
      const response = await axios.post('http://localhost:8080/api/inventory', formData);
      console.log('Data saved:', response.data);
   
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <h1>Add Inventory Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Manufacturer</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Batch Number</label>
          <input
            type="text"
            name="batchNumber"
            value={formData.batchNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity in Stock</label>
          <input
            type="number"
            name="quantityInStock"
            value={formData.quantityInStock}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Reorder Level</label>
          <input
            type="number"
            name="reorderLevel"
            value={formData.reorderLevel}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Unit Price</label>
          <input
            type="number"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Purchase Price</label>
          <input
            type="number"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Purchase Date</label>
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Expiration Date</label>
          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Storage Location</label>
          <input
            type="text"
            name="storageLocation"
            value={formData.storageLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Supplier Info</label>
          <input
            type="text"
            name="supplierInfo"
            value={formData.supplierInfo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Expired">Expired</option>
            <option value="In Stock">In Stock</option>
            {/* Add more statuses as needed */}
          </select>
        </div>
        <div>
          <label>Last Notified</label>
          <input
            type="date"
            name="lastNotified"
            value={formData.lastNotified}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddStock;
