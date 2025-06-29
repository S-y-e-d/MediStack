import TransactionForm from "../components/TransactionForm";
import TransactionReceipt from "../components/TransactionReceipt";
export default function Transaction() {
  return (
    <div className="transaction">
      <TransactionForm />
      <TransactionReceipt />
    </div>
  );
}
