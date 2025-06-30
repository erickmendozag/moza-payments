import React, { useState } from "react";

const BeneficiaryDirectory = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    name: "",
    address: "",
    bank: "",
  });

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (newEntry.name && newEntry.address && newEntry.bank) {
      setBeneficiaries([...beneficiaries, newEntry]);
      setNewEntry({ name: "", address: "", bank: "" });
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Directorio de Beneficiarios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre del beneficiario"
          className="border p-2 rounded"
          value={newEntry.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección de la wallet"
          className="border p-2 rounded"
          value={newEntry.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bank"
          placeholder="Banco / Institución"
          className="border p-2 rounded"
          value={newEntry.bank}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar Beneficiario
      </button>

      <ul className="mt-6 space-y-2">
        {beneficiaries.map((b, idx) => (
          <li
            key={idx}
            className="border p-3 rounded bg-gray-100 shadow-sm flex flex-col"
          >
            <span><strong>Nombre:</strong> {b.name}</span>
            <span><strong>Dirección:</strong> {b.address}</span>
            <span><strong>Banco:</strong> {b.bank}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeneficiaryDirectory;
