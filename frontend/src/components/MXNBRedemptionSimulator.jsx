// src/components/MXNBRedemptionSimulator.jsx
import React, { useState } from 'react';

const MXNBRedemptionSimulator = ({ onSimulateRedemption }) => {
  const [amount, setAmount] = useState('');
  const [clabe, setClabe] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [reference, setReference] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!amount || !clabe || !beneficiaryName) {
      alert("Por favor llena todos los campos.");
      return;
    }

    // Simular redención
    onSimulateRedemption({ amount, clabe, beneficiaryName, reference });

    setSuccess(true);
    setAmount('');
    setClabe('');
    setBeneficiaryName('');
    setReference('');
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-md mt-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">💳 Simulación de Redención MXNB → MXN (SPEI)</h2>

      <input
        type="number"
        placeholder="Monto a redimir (MXNB)"
        className="w-full mb-2 p-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="CLABE del beneficiario"
        className="w-full mb-2 p-2 border rounded"
        value={clabe}
        onChange={(e) => setClabe(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nombre del beneficiario"
        className="w-full mb-2 p-2 border rounded"
        value={beneficiaryName}
        onChange={(e) => setBeneficiaryName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Concepto o referencia"
        className="w-full mb-4 p-2 border rounded"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Redimir y transferir
      </button>

      {success && (
        <div className="mt-4 text-sm text-green-700 bg-green-100 p-3 rounded border border-green-300">
          ✅ Redención simulada completada.<br />
          El equivalente en MXN será enviado a <strong>{beneficiaryName}</strong> vía SPEI.<br />
          Referencia: <em>{reference || 'Sin referencia'}</em>
        </div>
      )}
    </div>
  );
};

export default MXNBRedemptionSimulator;
