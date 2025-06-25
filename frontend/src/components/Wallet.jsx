import { useState } from "react";
import { ethers } from "ethers";

export default function Wallet() {
  const [account, setAccount] = useState("");

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    }
  }

  return (
    <div>
      <button
        onClick={connectWallet}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </button>
    </div>
  );
}
