// src/components/MonthlyReport.jsx
import React from "react";
import { format } from "date-fns";

function MonthlyReport({ transactions, currentAddress }) {
  if (!transactions || transactions.length === 0) return null;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  let totalSent = 0;
  let totalReceived = 0;

  transactions.forEach((tx) => {
    const date = new Date(tx.timestamp * 1000);
    if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
      if (tx.from.toLowerCase() === currentAddress.toLowerCase()) {
        totalSent += parseFloat(tx.amount);
      } else if (tx.to.toLowerCase() === currentAddress.toLowerCase()) {
        totalReceived += parseFloat(tx.amount);
      }
    }
  });

  return (
    <div className="bg-gray-100 mt-6 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">📊 Reporte Mensual</h3>
      <p>
        <strong>Total enviado:</strong> {totalSent.toLocaleString()} MXNB
      </p>
      <p>
        <strong>Total recibido:</strong> {totalReceived.toLocaleString()} MXNB
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Datos simulados para {format(new Date(), "MMMM yyyy")}
      </p>
    </div>
  );
}

export default MonthlyReport;
