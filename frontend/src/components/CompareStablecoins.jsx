import React from "react";

const CompareStablecoins = () => {
  const rates = [
    { name: "USDT", rate: 1.00 },
    { name: "USDC", rate: 1.00 },
    { name: "DAI", rate: 1.00 },
    { name: "MXNB", rate: 1.00 }
  ];

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-2">Comparación MXNB vs Stablecoins</h2>
      <table className="min-w-full text-sm text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Stablecoin</th>
            <th className="py-2 px-4">Valor estimado</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((coin, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 font-medium">{coin.name}</td>
              <td className="py-2 px-4">{coin.rate.toFixed(2)} MXN</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareStablecoins;
