import React, { useState } from "react";

export default function AddressRegistry({ onClose }) {
  const [registry, setRegistry] = useState([]);
  const [form, setForm] = useState({
    address: "",
    razonSocial: "",
    direccion: "",
    representanteLegal: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.address) return;
    setRegistry([...registry, { ...form }]);
    setForm({
      address: "",
      razonSocial: "",
      direccion: "",
      representanteLegal: ""
    });
  };

  const handleDelete = (index) => {
    const updated = [...registry];
    updated.splice(index, 1);
    setRegistry(updated);
  };

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">Panel de Administración</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          name="address"
          placeholder="Address"
          className="border p-2"
          value={form.address}
          onChange={handleChange}
        />
        <input
          name="razonSocial"
          placeholder="Razón Social"
          className="border p-2"
          value={form.razonSocial}
          onChange={handleChange}
        />
        <input
          name="direccion"
          placeholder="Dirección"
          className="border p-2"
          value={form.direccion}
          onChange={handleChange}
        />
        <input
          name="representanteLegal"
          placeholder="Representante Legal"
          className="border p-2"
          value={form.representanteLegal}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Guardar
        </button>
        <button
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cerrar
        </button>
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Razón Social</th>
            <th className="p-2 border">Dirección</th>
            <th className="p-2 border">Representante Legal</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registry.length > 0 ? (
            registry.map((entry, i) => (
              <tr key={i}>
                <td className="p-2 border">{entry.address}</td>
                <td className="p-2 border">{entry.razonSocial}</td>
                <td className="p-2 border">{entry.direccion}</td>
                <td className="p-2 border">{entry.representanteLegal}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                Sin registros aún.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
