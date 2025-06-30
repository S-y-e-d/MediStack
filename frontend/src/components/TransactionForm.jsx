import { useState, useEffect } from "react";

export default function TransactionForm({ receiptData, setReceiptData }) {
  const [formData, setFormData] = useState({
    medicineName: "",
    quantity: 0,
  });

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const query = formData.medicineName.trim();
    if (!query) return setSuggestions([]);
    // debouncing: delay when sending search
    const delay = setTimeout(() => {
      // Add the query to search and return if in stock
      // fetch(
      //   ``,
      // )
      //   .then((res) => res.json())
      //   .then((data) => setSuggestions(data))
      //   .catch((err) => console.error("Error fetching suggestions:", err));
    }, 300);

    return () => clearTimeout(delay);
  }, [formData.medicineName]);

  const handleSuggestionClick = (name) => {
    setFormData((prev) => ({ ...prev, medicineName: name }));
    setSuggestions([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add the code for subtracting from stock

    // set the state vars to send data to generate receipt
    const newItem = {
      medicineId: "",
      medicineName: "",
      quantity: "",
      price: "",
    };
    setReceiptData({
      list: [...receiptData.list, newItem],
      total: receiptData.total + newItem.price * newItem.quantity,
    });
  };
  return (
    <div className="transaction-form">
      <h1>Transaction</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="input-wrapper">
          <input
            type="text"
            name="medicineName"
            placeholder="Medicine Name"
            value={formData.medicineName}
            onChange={handleChange}
            required
          />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((med) => (
                <li
                  key={med.id}
                  onClick={() => handleSuggestionClick(med.name)}
                >
                  {med.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
