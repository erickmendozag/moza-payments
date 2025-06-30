import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "../abis/MXNBTestnetABI.json";
import TransactionHistory from "./TransactionHistory";
import AdminPanel from "./AdminPanel";

const contractAddress = import.meta.env.VITE_MXNB_CONTRACT_ADDRESS;

const MXNBWallet = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [adminOpen, setAdminOpen] = useState(false);
  const [knownAddresses, setKnownAddresses] = useState({});

  const loadBlockchain = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const account = await signer.getAddress();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      setProvider(provider);
      setSigner(signer);
      setAccount(account);
      setContract(contract);
    } catch (error) {
      console.error("Error loading blockchain:", error);
    }
  };

  const getBalance = async () => {
    try {
      const rawBalance = await contract.balanceOf(account);
      setBalance(ethers.formatUnits(rawBalance, 18));
    } catch (error) {
      console.error("Error getting balance:", error);
      setBalance("Error MXNB");
    }
  };

  const transferTokens = async () => {
    try {
      const tx = await contract.transfer(recipient, ethers.parseUnits(amount, 18));
      await tx.wait();
      getBalance();
      setAmount("");
      setRecipient("");
    } catch (error) {
      console.error("Transfer failed:", error);
    }
  };

  const mintTokens = async () => {
    try {
      const tx = await contract.mint(account, ethers.parseUnits("1000", 18));
      await tx.wait();
      getBalance();
    } catch (error) {
      console.error("Mint failed:", error);
    }
  };

  const handleUpdateKnownAddresses = (newAddresses) => {
    setKnownAddresses(newAddresses);
  };

  useEffect(() => {
    loadBlockchain();
  }, []);

  useEffect(() => {
    if (contract && account) getBalance();
  }, [contract, account]);

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <button onClick={() => setAdminOpen(true)} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Abrir Panel Admin
      </button>

      {adminOpen ? (
        <AdminPanel onClose={() => setAdminOpen(false)} onUpdateKnownAddresses={handleUpdateKnownAddresses} />
      ) : (
        <>
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Billetera MXNB</h2>
            <p className="text-center mb-2">Saldo: <strong>{balance !== null ? `${balance} MXNB` : "Cargando..."}</strong></p>

            <input
              className="border p-2 w-full mb-2"
              placeholder="Dirección del destinatario"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <input
              className="border p-2 w-full mb-4"
              placeholder="Cantidad a enviar"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={transferTokens} className="bg-blue-600 text-white w-full py-2 rounded mb-2 hover:bg-blue-700">
              Transferir MXNB
            </button>
            <button onClick={mintTokens} className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
              Mint 1000 MXNB (testnet)
            </button>
          </div>

          {/* Historial de Transacciones */}
          <div className="mt-6 w-full max-w-3xl">
            <TransactionHistory provider={provider} contract={contract} knownAddresses={knownAddresses} />
          </div>

          {/* Comparación simple de valor */}
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">Comparación con otras Stablecoins</h3>
            <p className="text-sm text-gray-700">1 MXNB = 1 MXN ≈ 0.055 USDT</p>
          </div>

          <button onClick={() => setAdminOpen(true)} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Ir al Panel de Administración
          </button>
        </>
      )}
    </div>
  );
};

export default MXNBWallet;
