import { ethers } from "ethers";

function WalletConnect() {
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask tidak ditemukan");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      alert("Wallet berhasil terhubung");
    } catch (error) {
      alert("Gagal menghubungkan wallet");
    }
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default WalletConnect;