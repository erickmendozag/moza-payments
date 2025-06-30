import React from "react";

export default function Table({ columns, data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 text-left font-semibold text-sm text-gray-700">
                {col}
              </th>
            ))}
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 text-sm">{row[col]}</td>
              ))}
              <td className="px-4 py-2">
                <button onClick={() => onEdit(i)} className="text-blue-600 hover:underline mr-2">Editar</button>
                <button onClick={() => onDelete(i)} className="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
