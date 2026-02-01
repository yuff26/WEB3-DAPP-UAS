import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import "./App.css";

const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000"; // dummy
const ABI = [
  "function getTotalDonations() view returns (uint256)"
];

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setError("MetaMask tidak ditemukan");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      setAccount(accounts[0]);

      const bal = await provider.getBalance(accounts[0]);
      setBalance(ethers.formatEther(bal));

      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      await contract.getTotalDonations(); // simulasi baca smart contract
    } catch (err) {
      setError("Gagal menghubungkan wallet");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/transactions")
      .then(res => setTransactions(res.data))
      .catch(() => setError("Gagal mengambil data transaksi"));
  }, []);

  return (
    <div className="container">
      <h2>Web3 Donation DApp</h2>

      <button onClick={connectWallet}>Connect Wallet</button>

      {error && <p className="error">{error}</p>}

      {account && (
        <div className="wallet">
          <p><b>Address:</b> {account}</p>
          <p><b>Saldo:</b> {balance} ETH</p>
        </div>
      )}

      <h3>Daftar Transaksi</h3>
      <div className="transactions">
        {transactions.map(tx => (
          <div key={tx.id} className="card">
            <p>{tx.from}</p>
            <p>{tx.amount}</p>
            <small>{tx.timestamp}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
