// src/components/RedemptionSimulator.jsx
import React, { useState } from 'react';

const RedemptionSimulator = () => {
  const [amount, setAmount] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [bank, setBank] = useState('');
  const [clabe, setClabe] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const handleRedeem = () => {
    if (!amount || !recipientName || !bank || !clabe) return;
    setConfirmation({
      monto: amount,
      receptor: recipientName,
      banco: bank,
      clabe,
      fecha: new Date().toLocaleString(),
    });
    setAmount('');
    setRecipientName('');
    setBank('');
    setClabe('');
  };

  return (
    <div className="bg-white mt-6 border rounded-xl p-5 shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">🏦 Redención MXNB a MXN (SPEI)</h2>

      <input
        type="number"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Monto en MXNB a redimir"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Nombre del beneficiario"
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
      />
      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Banco destino (Ej: BBVA, Santander)"
        value={bank}
        onChange={(e) => setBank(e.target.value)}
      />
      <input
        type="text"
        className="w-full mb-4 p-2 border rounded"
        placeholder="CLABE de 18 dígitos"
        value={clabe}
        onChange={(e) => setClabe(e.target.value)}
      />

      <button
        onClick={handleRedeem}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Simular Redención SPEI
      </button>

      {confirmation && (
        <div className="mt-4 text-blue-700 bg-blue-100 p-4 rounded border border-blue-300">
          ✅ Se ha simulado la redención de <strong>{confirmation.monto} MXNB</strong><br />
          a nombre de <strong>{confirmation.receptor}</strong><br />
          Banco: <strong>{confirmation.banco}</strong><br />
          CLABE: <strong>{confirmation.clabe}</strong><br />
          Fecha/Hora: {confirmation.fecha}
        </div>
      )}
    </div>
  );
};

export default RedemptionSimulator;
