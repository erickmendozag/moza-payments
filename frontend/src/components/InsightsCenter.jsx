// src/components/InsightsCenter.jsx
import React from 'react';

const InsightsCenter = ({ transactions = [], commissionSaved = 0 }) => {
  const totalSent = transactions
    .filter(tx => tx.type === 'send')
    .reduce((sum, tx) => sum + Number(tx.amount || 0), 0);

  const totalReceived = transactions
    .filter(tx => tx.type === 'receive')
    .reduce((sum, tx) => sum + Number(tx.amount || 0), 0);

  return (
    <div className="bg-white p-6 mt-6 rounded-xl shadow border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📊 Centro de Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-purple-100 p-4 rounded">
          <p className="text-sm text-gray-600">MXNB Enviados</p>
          <p className="text-2xl font-bold text-purple-700">${totalSent.toFixed(2)}</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <p className="text-sm text-gray-600">MXNB Recibidos</p>
          <p className="text-2xl font-bold text-green-700">${totalReceived.toFixed(2)}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded">
          <p className="text-sm text-gray-600">Ahorro en Comisiones</p>
          <p className="text-2xl font-bold text-blue-700">${commissionSaved.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        🔔 Tip: ¿Sabías que puedes automatizar pagos mensuales a proveedores? Usa el módulo de calendario de transferencias futuras para programarlo.
      </div>
    </div>
  );
};

export default InsightsCenter;
