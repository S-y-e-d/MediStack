export default function TransactionReceipt({ receiptData }) {
  return (
    <div className="transaction-receipt">
      <h1>[Business Name]</h1>
      <h2>RECEIPT</h2>
      <span>[Date : Time]</span>
      <hr />
      <table className="receipt-table">
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Medicine Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {receiptData &&
            receiptData.list.map((item) => (
              <tr key={item.medicineId}>
                <td>{item.medicineName}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          <tr>
            <td>Tax</td>
            <td></td>
            <td>{receiptData && receiptData.tax}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>
            <td>{receiptData && receiptData.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
