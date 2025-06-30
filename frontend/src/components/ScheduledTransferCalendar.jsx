import React, { useState } from "react";

const ScheduledTransferCalendar = ({ onSchedule }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [toAddress, setToAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !amount || !toAddress) return;

    const scheduledTransfer = {
      id: Date.now(),
      date,
      amount,
      toAddress,
    };

    onSchedule(scheduledTransfer);
    setDate("");
    setAmount("");
    setToAddress("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-3">📅 Agendar Transferencia</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dirección destino"
          className="w-full border p-2 rounded"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad en MXNB"
          className="w-full border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Programar
        </button>
      </form>
    </div>
  );
};

export default ScheduledTransferCalendar;
