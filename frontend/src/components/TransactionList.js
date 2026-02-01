import { useEffect, useState } from "react";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch(() => alert("Gagal mengambil data transaksi"));
  }, []);

  return (
    <div>
      <h3>Daftar Transaksi</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            {tx.from} → {tx.to} ({tx.amount})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;