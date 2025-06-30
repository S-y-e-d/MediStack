import { useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionReceipt from "../components/TransactionReceipt";
export default function Transaction() {
  const [receiptData, setReceiptData] = useState({
    /* @type {{
     *    medicineID: string,
     *    medicineName: string,
     *    quantity: number,
     *    price: number
     * }[]} */
    list: [],
    tax: "",
    total: "",
  });
  return (
    <div className="transaction">
      <TransactionForm
        receiptData={receiptData}
        setReceiptData={setReceiptData}
      />
      <TransactionReceipt receiptData={receiptData} />
    </div>
  );
}
