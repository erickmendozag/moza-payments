// src/components/EmbeddedWalletManager.jsx
import React, { useState } from 'react';
import { ethers } from 'ethers';

const EmbeddedWalletManager = () => {
  const [wallet, setWallet] = useState(null);

  const createWallet = () => {
    const newWallet = ethers.Wallet.createRandom();
    setWallet(newWallet);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6 border">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        🔐 Simulador de Wallet Embebida (Portal MPC)
      </h2>

      <button
        onClick={createWallet}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Generar Wallet Segura
      </button>

      {wallet && (
        <div className="mt-4 text-sm text-gray-700 space-y-2">
          <div><strong>Dirección:</strong> {wallet.address}</div>
          <div><strong>Frase de recuperación:</strong> <code>{wallet.mnemonic.phrase}</code></div>
          <div><strong>Clave privada:</strong> <code>{wallet.privateKey}</code></div>
        </div>
      )}
    </div>
  );
};

export default EmbeddedWalletManager;
