// frontend/src/components/MXNBMintSimulator.jsx
import React, { useState } from "react";

const MXNBMintSimulator = ({ onSimulateMint }) => {
  const [companyName, setCompanyName] = useState("");
  const [clabe, setClabe] = useState("646180157000000001"); // CLABE virtual demo
  const [amount, setAmount] = useState("");

  const handleSimulate = () => {
    if (!companyName || !amount) return alert("Completa todos los campos");
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) return alert("Monto inválido");
    onSimulateMint(parsedAmount);
    alert(`✅ Se han emitido ${parsedAmount} MXNB a nombre de ${companyName}`);
    setCompanyName("");
    setAmount("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-red-600 mb-4">💰 Simular Emisión de MXNB (CLABE)</h2>

      <div className="grid gap-3">
        <input
          className="border p-2 rounded"
          placeholder="Razón Social / Empresa"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          className="border p-2 rounded bg-gray-100"
          value={clabe}
          disabled
        />
        <input
          className="border p-2 rounded"
          placeholder="Monto en MXN"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleSimulate}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Emitir MXNB Simulado
        </button>
      </div>
    </div>
  );
};

export default MXNBMintSimulator;
