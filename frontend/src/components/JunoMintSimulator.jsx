// src/components/JunoMintSimulator.jsx
import React, { useState } from 'react';

const JunoMintSimulator = () => {
  const [clabe, setClabe] = useState('');
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [success, setSuccess] = useState(false);

  // Simulador de mapeo CLABE → wallet (demo)
  const clabeToWallet = {
    '646180123456789012': '0x123...abc',
    '646180999999999999': '0x456...def',
  };

  const handleSimulate = () => {
    if (!clabe || !amount) {
      alert("Por favor llena todos los campos.");
      return;
    }

    const matchedWallet = clabeToWallet[clabe] || '0xSimulatedWalletAddress';
    setWalletAddress(matchedWallet);
    setSuccess(true);

    // Aquí podrías agregar lógica para registrar en historial o simular mint real
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-md mt-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        🏦 Simulación de Depósito MXN → Emisión MXNB (Juno CLABE)
      </h2>

      <input
        type="text"
        placeholder="CLABE virtual (usuario)"
        className="w-full mb-2 p-2 border rounded"
        value={clabe}
        onChange={(e) => setClabe(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monto recibido (MXN)"
        className="w-full mb-4 p-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleSimulate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Simular depósito y emisión
      </button>

      {success && (
        <div className="mt-4 text-sm text-blue-700 bg-blue-100 p-3 rounded border border-blue-300">
          ✅ Se ha simulado la emisión de <strong>{amount} MXNB</strong> a la wallet <code>{walletAddress}</code> asociada a la CLABE <code>{clabe}</code>.
        </div>
      )}
    </div>
  );
};

export default JunoMintSimulator;

