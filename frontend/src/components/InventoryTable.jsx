import axios from "axios";
import { useEffect, useState } from "react";
export default function InventoryTable() {
  const [data, setData] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const inventoryUrl = `${BASE_URL}/api/inventory`;
  useEffect(() => {
    axios.get(inventoryUrl)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Fetch Error", err));
  }, []);

  return (
    <table className="inventory-table">
      <thead>
        <tr>
          <th>MedicineID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Manufacturer</th>
          <th>Batch Number</th>
          <th>Quantity in Stock</th>
          <th>Reorder Level</th>
          <th>Unit Price </th>
          <th>Purchase Price</th>
          <th>Purchase Date</th>
          <th>Expiration Date </th>
          <th>Storage Location</th>
          <th>Supplier Info</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map((item) => (
            <tr key={item.medicineId}>
              <td>{item.medicineId}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.manufacturer}</td>
              <td>{item.batchNumber}</td>
              <td>{item.quantityInStock}</td>
              <td>{item.reorderLevel}</td>
              <td>{item.unitPrice}</td>
              <td>{item.purchasePrice}</td>
              <td>{item.purchaseDate}</td>
              <td>{item.expirationDate}</td>
              <td>{item.storageLocation}</td>
              <td>{item.supplierInfo}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="13" className="empty">
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
