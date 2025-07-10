// src/components/FXConversionSimulator.jsx
import React, { useState } from 'react';

const FXConversionSimulator = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [converted, setConverted] = useState(null);

  const fxRates = {
    USD: 0.058,  // 1 MXN = 0.058 USD (simulado)
    EUR: 0.053,
    BRL: 0.31,
  };

  const handleConvert = () => {
    if (!amount || isNaN(amount)) return;
    const rate = fxRates[currency];
    const result = (parseFloat(amount) * rate).toFixed(2);
    setConverted(result);
  };

  return (
    <div className="bg-white mt-6 border rounded-xl p-5 shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">🌐 Simulador FX - Convertir MXNB</h2>

      <input
        type="number"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Monto en MXNB"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="w-full mb-4 p-2 border rounded"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">Dólares (USD)</option>
        <option value="EUR">Euros (EUR)</option>
        <option value="BRL">Reales (BRL)</option>
      </select>

      <button
        onClick={handleConvert}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Convertir
      </button>

      {converted && (
        <div className="mt-4 text-green-700 bg-green-100 p-3 rounded border border-green-300">
          🌍 Recibirías <strong>{converted} {currency}</strong> por {amount} MXNB.
        </div>
      )}
    </div>
  );
};

export default FXConversionSimulator;
