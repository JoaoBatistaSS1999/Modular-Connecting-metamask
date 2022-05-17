import "./App.css";
import { useState } from "react";

function App() {
  const [walletAdderess, setWalletAddress] = useState("");
  const [connected, setConnected] = useState(false);

  const requestAccounts = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setConnected(true);
      }
      return;
    }

    return console.log("error, not found");
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={requestAccounts}>Connect Wallet</button>
        {connected && <h3>Wallet Address: {walletAdderess}</h3>}
      </header>
    </div>
  );
}

export default App;
