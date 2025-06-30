import { useEffect, useState } from "react";
import { ethers } from "ethers";

const MXNB_ADDRESS = "0xB6093B61544572Ab42A0E43AF08aBaFD41bf25A6";
const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)"
];

export default function Balance() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [symbol, setSymbol] = useState("MXNB");

  useEffect(() => {
    const loadBalance = async () => {
      if (!window.ethereum) {
        alert("Instala MetaMask");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      setAccount(userAddress);

      const tokenContract = new ethers.Contract(MXNB_ADDRESS, ERC20_ABI, provider);
      const [rawBalance, decimals, sym] = await Promise.all([
        tokenContract.balanceOf(userAddress),
        tokenContract.decimals(),
        tokenContract.symbol()
      ]);

      const formatted = ethers.utils.formatUnits(rawBalance, decimals);
      console.log("Balance formateado:", formatted);
      setBalance(formatted);
      setSymbol(sym);
    };

    loadBalance();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Balance MXNB</h2>
      {account && <p><strong>Wallet:</strong> {account}</p>}
      {balance ? (
        <p><strong>Saldo:</strong> {balance} {symbol}</p>
      ) : (
        <p>Cargando balance...</p>
      )}
    </div>
  );
}
