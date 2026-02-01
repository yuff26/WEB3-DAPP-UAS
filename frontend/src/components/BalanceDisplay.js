import { useState } from "react";
import { ethers } from "ethers";

function BalanceDisplay() {
  const [balance, setBalance] = useState("");

  const getBalance = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask tidak ditemukan");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const bal = await provider.getBalance(signer.address);

      setBalance(ethers.formatEther(bal));
    } catch (error) {
      alert("Gagal mengambil saldo");
    }
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <button onClick={getBalance}>Lihat Saldo</button>
      {balance && <p>Saldo: {balance} ETH</p>}
    </div>
  );
}

export default BalanceDisplay;