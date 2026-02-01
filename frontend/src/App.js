import WalletConnect from "./components/WalletConnect";
import BalanceDisplay from "./components/BalanceDisplay";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Web3 DApp UAS</h2>

      <WalletConnect />
      <BalanceDisplay />
      <TransactionList />
    </div>
  );
}

export default App;