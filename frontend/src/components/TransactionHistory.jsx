import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { format } from "date-fns";

function TransactionHistory({ provider, contract, knownAddresses }) {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const filter = contract.filters.Transfer();
        const events = await contract.queryFilter(filter, -1000);
        const parsed = events.map((e) => ({
          hash: e.transactionHash,
          from: e.args.from,
          to: e.args.to,
          amount: parseFloat(ethers.utils.formatUnits(e.args.value, 18)),
          timestamp: 1720040400,
        }));
        setTransactions(parsed);
        setFilteredTransactions(parsed);
      } catch (error) {
        console.error("Error loading transactions:", error);
      }
    };
    if (contract) loadTransactions();
  }, [contract]);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = transactions.filter((tx) => {
      return (
        tx.from.toLowerCase().includes(term) ||
        tx.to.toLowerCase().includes(term) ||
        tx.hash.toLowerCase().includes(term) ||
        tx.amount.toString().includes(term)
      );
    });
    setFilteredTransactions(filtered);
  }, [searchTerm, transactions]);

  return (
    <div>
      <h3 className="text-lg font-semibold mt-4 mb-2">Historial de Transacciones</h3>

      <input
        type="text"
        className="border p-2 rounded w-full mb-4"
        placeholder="Buscar por dirección, monto o hash..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Fecha</th>
              <th className="p-2">De</th>
              <th className="p-2">Para</th>
              <th className="p-2">Monto (MXNB)</th>
              <th className="p-2">Tx Hash</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Sin transacciones recientes.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((tx, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{format(new Date(tx.timestamp * 1000), "yyyy-MM-dd HH:mm")}</td>
                  <td className="p-2">{shorten(tx.from)}</td>
                  <td className="p-2">{shorten(tx.to)}</td>
                  <td className="p-2">{tx.amount}</td>
                  <td className="p-2">
                    <a
                      href={`https://sepolia.arbiscan.io/tx/${tx.hash}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      Ver
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const shorten = (addr) => addr.slice(0, 6) + "..." + addr.slice(-3);

export default TransactionHistory;
