// src/components/MultiClabeManager.jsx
import React, { useState } from 'react';

const MultiClabeManager = () => {
  const [clientName, setClientName] = useState('');
  const [subClabe, setSubClabe] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [records, setRecords] = useState([]);

  const handleSimulateDeposit = () => {
    if (!clientName || !subClabe || !depositAmount) return;

    const newRecord = {
      name: clientName,
      clabe: subClabe,
      amount: depositAmount,
      mxnbIssued: depositAmount,
      timestamp: new Date().toLocaleString(),
    };

    setRecords([newRecord, ...records]);
    setClientName('');
    setSubClabe('');
    setDepositAmount('');
  };

  return (
    <div className="bg-white mt-6 p-5 rounded-xl shadow-md border">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        🧩 MultiCLABE Simulator (Depósitos MXN → Emisión MXNB)
      </h2>

      <input
        type="text"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Nombre del Cliente"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-2 mb-2 border rounded"
        placeholder="SubCLABE Asignada (18 dígitos)"
        value={subClabe}
        onChange={(e) => setSubClabe(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Monto depositado en MXN"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />

      <button
        onClick={handleSimulateDeposit}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Simular Depósito y Emisión MXNB
      </button>

      {records.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">📄 Historial de Emisiones</h3>
          <table className="w-full text-sm text-left border border-gray-300 rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Cliente</th>
                <th className="p-2 border">SubCLABE</th>
                <th className="p-2 border">Monto (MXN)</th>
                <th className="p-2 border">MXNB Emitidos</th>
                <th className="p-2 border">Fecha/Hora</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i} className="border-t text-gray-700">
                  <td className="p-2 border">{r.name}</td>
                  <td className="p-2 border">{r.clabe}</td>
                  <td className="p-2 border">${r.amount}</td>
                  <td className="p-2 border">{r.mxnbIssued} MXNB</td>
                  <td className="p-2 border">{r.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MultiClabeManager;
