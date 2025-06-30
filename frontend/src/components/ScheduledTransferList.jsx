import React from "react";

const ScheduledTransferList = ({ transfers }) => {
  if (transfers.length === 0) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-lg font-semibold mb-2">⏳ Transferencias Programadas</h2>
      <ul className="space-y-2">
        {transfers.map((t) => (
          <li key={t.id} className="border-b pb-2 text-sm">
            <strong>{t.date}</strong> → {t.amount} MXNB a {t.toAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledTransferList;
