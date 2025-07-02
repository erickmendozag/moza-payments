import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import ABI from "../abis/MXNBSimulatedABI.json";
import TransactionHistory from "./TransactionHistory";
import AddressRegistry from "./AddressRegistry";
import StablecoinComparison from "./StablecoinComparison";
import MonthlyReport from "./MonthlyReport";
import CommissionSavings from "./CommissionSavings";
import TransactionTracker from "./TransactionTracker";
import FXNewsWidget from "./FXNewsWidget";
import ScheduledTransferCalendar from "./ScheduledTransferCalendar";
import ScheduledTransferList from "./ScheduledTransferList";
import BeneficiaryDirectory from "./BeneficiaryDirectory";
import TransferMap from "./TransferMap";
import CentralAccountPanel from "./CentralAccountPanel";


const contractAddress = import.meta.env.VITE_MXNB_CONTRACT_ADDRESS;

if (!contractAddress) {
  throw new Error("❌ La dirección del contrato es undefined. Verifica el archivo .env");
}

function Wallet() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState("0");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [scheduledTransfers, setScheduledTransfers] = useState([]);

  useEffect(() => {
    if (window.ethereum) {
      const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(tempProvider);

      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) setCurrentAccount(accounts[0]);
      });

      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) setCurrentAccount(accounts[0]);
        else setCurrentAccount(null);
      });
    }
  }, []);

  useEffect(() => {
    if (provider && currentAccount) {
      const tempSigner = provider.getSigner();
      const tempContract = new ethers.Contract(contractAddress, ABI, tempSigner);
      setSigner(tempSigner);
      setContract(tempContract);
    }
  }, [provider, currentAccount]);

  useEffect(() => {
    if (contract && currentAccount) {
      loadBalance();
      loadTransactions();
    }
  }, [contract, currentAccount]);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    setCurrentAccount(accounts[0]);
  };

  const loadBalance = async () => {
    const bal = await contract.balanceOf(currentAccount);
    setBalance(ethers.utils.formatUnits(bal, 18));
  };

  const loadTransactions = async () => {
    const block = await provider.getBlockNumber();
    const events = await contract.queryFilter("Transfer", block - 10000, block);
    const filtered = events
      .filter((e) => e.args.from === currentAccount || e.args.to === currentAccount)
      .map((e) => ({
        from: e.args.from,
        to: e.args.to,
        value: ethers.utils.formatUnits(e.args.value, 18),
        txHash: e.transactionHash,
      }));
    setTransactions(filtered.reverse());
  };

  const sendTokens = async () => {
    if (!recipient || !amount) return;
    const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
    await tx.wait();
    setRecipient("");
    setAmount("");
    loadBalance();
    loadTransactions();
  };

  const mintTokens = async () => {
    const tx = await contract.mint(currentAccount, ethers.utils.parseUnits("1000", 18));
    await tx.wait();
    loadBalance();
    loadTransactions();
  };

  const handleScheduleTransfer = (transfer) => {
    setScheduledTransfers((prev) => [...prev, transfer]);
  };

  return (
    <div className="p-6">
      {!currentAccount ? (
        <button onClick={connectWallet} className="bg-blue-600 text-white px-4 py-2 rounded">
          Conectar Wallet
        </button>
      ) : (
        <>
          <p className="mb-2">Cuenta: {currentAccount}</p>
          <p className="mb-4">Balance MXNB: {balance}</p>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Dirección destino"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="border px-2 py-1 rounded w-1/2"
            />
            <input
              type="text"
              placeholder="Cantidad"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border px-2 py-1 rounded w-1/4"
            />
            <button onClick={sendTokens} className="bg-green-600 text-white px-4 py-2 rounded">
              Transferir
            </button>
          </div>

          <button onClick={mintTokens} className="bg-purple-600 text-white px-4 py-2 mb-4 rounded">
            Mint 1000 MXNB
          </button>

          <TransactionHistory transactions={transactions} />
          <MonthlyReport transactions={transactions} currentAddress={currentAccount} />
          <TransactionTracker currentStep={3} />
          <FXNewsWidget />
          <CommissionSavings transactions={transactions} currentAddress={currentAccount} />
          <StablecoinComparison />
          <ScheduledTransferCalendar onSchedule={handleScheduleTransfer} />
          <ScheduledTransferList transfers={scheduledTransfers} />
          <AddressRegistry />
          <BeneficiaryDirectory />
          <TransferMap />
          <CentralAccountPanel />
          


          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="mt-4 text-sm underline text-blue-700"
          >
            {showAdmin ? "Ocultar Admin" : "Panel Admin"}
          </button>
          {showAdmin && <AddressRegistry />}
        </>
      )}
    </div>
  );
}

export default Wallet;
