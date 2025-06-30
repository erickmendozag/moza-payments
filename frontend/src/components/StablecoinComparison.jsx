// src/components/StablecoinComparison.jsx
import React from "react";

const StablecoinComparison = () => {
  const pairs = [
    { name: "USDT", parity: "≈ 1 MXN", note: "Referencia al tipo de cambio oficial" },
    { name: "USDC", parity: "≈ 1 MXN", note: "Estable y ampliamente utilizada" },
    { name: "DAI",  parity: "≈ 1 MXN", note: "Respaldada por activos colaterales" },
  ];

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4">MXNB comparado con otras stablecoins</h2>
      <table className="min-w-full text-sm text-left">
        <thead className="border-b font-semibold">
          <tr>
            <th className="px-4 py-2">Stablecoin</th>
            <th className="px-4 py-2">Valor frente a MXNB</th>
            <th className="px-4 py-2">Comentario</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map((pair, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{pair.name}</td>
              <td className="px-4 py-2">{pair.parity}</td>
              <td className="px-4 py-2 text-gray-600">{pair.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StablecoinComparison;
