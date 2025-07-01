import React, { useState } from 'react';
import axios from 'axios';
import '../css/AddStock.css'
import boxImage from '../assets/addStock.gif'
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getTodayStr = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;  // e.g., "2025-07-01"
};

const initialFormData = {
  name: '',
  category: '',
  manufacturer: '',
  batchNumber: '',
  quantityInStock: 0,
  reorderLevel: 0,
  unitPrice: 0.0,
  purchasePrice: 0.0,
  purchaseDate: getTodayStr(),
  expirationDate: getTodayStr(),
  storageLocation: '',
  supplierInfo: '',
  status: '',
  lastNotified: getTodayStr()
};

function AddStock() {

  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState(initialFormData);

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
      const response = await axios.post(`${BASE_URL}/api/inventory`, formData);
      setSuccessMessage('✅ Data saved successfully!');

      // Clear form
      setFormData(initialFormData);

      setTimeout(() => setSuccessMessage(''), 10000);

    } catch (error) {
      console.error('There was an error!', error);
      setSuccessMessage('❌ Failed to save data.');
      setTimeout(() => setSuccessMessage(''), 10000);
    }
  };


  return (
    <div>
      <div className='heading'>
        <h1>Add Inventory Item</h1>
        <img src={boxImage} alt=''></img>
      </div>
      
      {successMessage && (
        <div style={{ color: successMessage.startsWith('✅') ? 'green' : 'red', marginBottom: '1rem' }}>
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className='card'>
          <h2 className='card-heading'>Medicine Information</h2>
          {/* <hr></hr> */}
          <div className='medicine-info'>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className='card'>
          <h2 className='card-heading'>Manufacturing Information</h2>

          <div className='manufacturer-info'>
            <div>
              <label>Manufacturer:</label>
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Batch Number:</label>
              <input
                type="text"
                name="batchNumber"
                value={formData.batchNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className='card'>
          <h2 className='card-heading'>Storage Information</h2>

          <div className='storage-info'>
            <div>
              <label>Storage Location:</label>
              <input
                type="text"
                name="storageLocation"
                value={formData.storageLocation}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Quantity in Stock:</label>
              <input
                type="number"
                name="quantityInStock"
                value={formData.quantityInStock}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Reorder Level:</label>
              <input
                type="number"
                name="reorderLevel"
                value={formData.reorderLevel}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className='card'>
          <h2 className='card-heading'>Pricing Information</h2>

          <div className='pricing-info'>
            <div>
              <label>Unit Price:</label>
              <input
                type="number"
                name="unitPrice"
                value={formData.unitPrice}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Purchase Price:</label>
              <input
                type="number"
                name="purchasePrice"
                value={formData.purchasePrice}
                onChange={handleChange}
                required
              />
            </div>

          </div>
        </div>

        <div className='card'>
          <h2 className='card-heading'>Supplier Information</h2>

          <div className='purchase-info'>
            <div>
              <label>Purchase Date:</label>
              <input
                type="date"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Expiration Date:</label>
              <input
                type="date"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Supplier Info:</label>
              <input
                type="text"
                name="supplierInfo"
                value={formData.supplierInfo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

        </div>

        <div className='card'>
          <h2 className='card-heading'>Other</h2>

          <div className='other'>
            <div>
              <label>Status:</label>
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
              <label>Last Notified:</label>
              <input
                type="date"
                name="lastNotified"
                value={formData.lastNotified}
                onChange={handleChange}
              />
            </div>

          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddStock;
