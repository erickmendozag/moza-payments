import React, { useState } from "react";
import Table from "./ui/Table";

const columns = ["Address", "Razón Social", "Dirección", "Representante Legal"];

export default function AdminPanel({ onClose }) {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ Address: "", "Razón Social": "", Dirección: "", "Representante Legal": "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setData([...data, form]);
    setForm({ Address: "", "Razón Social": "", Dirección: "", "Representante Legal": "" });
  };

  const handleDelete = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  };

  const handleEdit = (index) => {
    const row = data[index];
    setForm(row);
    handleDelete(index);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Panel de Administración</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {columns.map((col) => (
          <input
            key={col}
            type="text"
            name={col}
            value={form[col]}
            onChange={handleChange}
            placeholder={col}
            className="border px-3 py-2 rounded text-sm"
          />
        ))}
      </div>

      <div className="mb-4">
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2">
          Guardar
        </button>
        <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
          Cerrar
        </button>
      </div>

      <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
