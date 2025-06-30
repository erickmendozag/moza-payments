import React, { useEffect, useState } from "react";

const averageBankFee = 0.03; // 3% comisión bancaria estimada
const averageFxMargin = 0.015; // 1.5% comisión promedio en tipo de cambio
const mozaFee = 0; // MOZA no cobra comisión

const CommissionSavings = ({ transactions, currentAddress }) => {
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    if (!transactions || !currentAddress) return;

    let totalSent = 0;

    transactions.forEach((tx) => {
      if (tx.from.toLowerCase() === currentAddress.toLowerCase()) {
        totalSent += parseFloat(tx.amount);
      }
    });

    const estimatedBankCost = totalSent * (averageBankFee + averageFxMargin);
    const mozaCost = totalSent * mozaFee;
    const estimatedSavings = estimatedBankCost - mozaCost;

    setSavings(estimatedSavings);
  }, [transactions, currentAddress]);

  return (
    <div className="bg-green-50 p-4 rounded shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-2">💸 Ahorro en comisiones</h2>
      <p className="text-gray-700">
        Usando <strong>MOZA Payments</strong>, has ahorrado aproximadamente:
      </p>
      <p className="text-2xl font-bold text-green-700 mt-2">
        ${savings.toFixed(2)} MXN
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Comparado con bancos tradicionales y casas de cambio que cobran hasta un 4.5% combinado.
      </p>
    </div>
  );
};

export default CommissionSavings;
