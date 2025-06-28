import { useEffect, useState } from "react";
export default function SalesTable() {
  const [data, setData] = useState(null);
  const salesUrl = "http://localhost:8080/api/inventory";
  useEffect(() => {
    fetch(salesUrl)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch Error", err));
  }, []);

  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>Sale_ID</th>
          <th>Medicine_ID</th>
          <th>Quantity_Sold</th>
          <th>Sale_Date</th>
          <th>Selling_Price</th>
          <th>Customer_Type</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map((item) => {
            <tr key={item.saleId}>
              <td>{item.saleId}</td>
              <td>{item.medicineId}</td>
              <td>{item.quantitySold}</td>
              <td>{item.saleDate}</td>
              <td>{item.sellingPrice}</td>
              <td>{item.customerType}</td>
            </tr>;
          })
        ) : (
          <tr>
            <td colspan="6" className="empty">
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
