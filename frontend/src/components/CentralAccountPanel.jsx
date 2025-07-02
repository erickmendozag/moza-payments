import React, { useState } from "react";

const CentralAccountPanel = () => {
  const [sendData, setSendData] = useState({ address: "", amount: "", reference: "" });
  const [conversionAmount, setConversionAmount] = useState("");
  const [logs, setLogs] = useState([]);

  const logAction = (text) => {
    setLogs((prev) => [`✅ ${text}`, ...prev]);
  };

  const handleReceive = () => {
    logAction("Simulación: MXNB recibido con referencia 'Pago por servicios corporativos'.");
  };

  const handleSend = () => {
    if (!sendData.address || !sendData.amount) {
      alert("Por favor completa los campos de envío.");
      return;
    }
    logAction(`Simulación: Enviado ${sendData.amount} MXNB a ${sendData.address} con referencia '${sendData.reference}'.`);
    setSendData({ address: "", amount: "", reference: "" });
  };

  const handleConvert = () => {
    if (!conversionAmount) {
      alert("Ingresa un monto para convertir.");
      return;
    }
    logAction(`Simulación: Convertidos ${conversionAmount} MXNB a MXN. Transferencia SPEI preparada.`);
    setConversionAmount("");
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-red-600">🧾 Cuenta Concentradora Empresarial</h2>

      {/* Recibir */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">📥 Recepción de MXNB</h3>
        <p className="text-sm text-gray-600 mb-2">
          Esta wallet puede recibir transferencias internacionales y nacionales con información de empresa y referencia.
        </p>
        <button onClick={handleReceive} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Simular Recepción
        </button>
      </div>

      {/* Enviar */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">📤 Enviar Transferencia MXNB</h3>
        <input
          type="text"
          placeholder="Dirección del beneficiario"
          value={sendData.address}
          onChange={(e) => setSendData({ ...sendData, address: e.target.value })}
          className="border p-2 w-full mb-2 rounded"
        />
        <input
          type="number"
          placeholder="Monto en MXNB"
          value={sendData.amount}
          onChange={(e) => setSendData({ ...sendData, amount: e.target.value })}
          className="border p-2 w-full mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Referencia de la empresa"
          value={sendData.reference}
          onChange={(e) => setSendData({ ...sendData, reference: e.target.value })}
          className="border p-2 w-full mb-2 rounded"
        />
        <button onClick={handleSend} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Simular Envío
        </button>
      </div>

      {/* Convertir */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">💱 Convertir MXNB a MXN</h3>
        <input
          type="number"
          placeholder="Monto a convertir"
          value={conversionAmount}
          onChange={(e) => setConversionAmount(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />
        <button onClick={handleConvert} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Simular Conversión y SPEI
        </button>
      </div>

      {/* Registro de acciones */}
      <div className="bg-gray-50 p-4 rounded">
        <h4 className="font-medium text-gray-700 mb-2">📋 Actividad Reciente</h4>
        <ul className="text-sm text-gray-700 space-y-1 max-h-40 overflow-y-auto">
          {logs.map((log, i) => (
            <li key={i}>• {log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CentralAccountPanel;
