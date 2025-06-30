// src/components/FXNewsWidget.jsx
import React from "react";

const dummyNews = [
  {
    title: "El peso mexicano se mantiene fuerte frente al dólar",
    date: "2025-06-29",
    summary: "Analistas apuntan a un mejor clima económico y tasas de interés atractivas."
  },
  {
    title: "Banco Central de EE.UU. mantiene tasa sin cambios",
    date: "2025-06-28",
    summary: "La decisión impacta el valor del USD frente a monedas emergentes como el MXN."
  },
  {
    title: "Aumento en las remesas fortalece la economía mexicana",
    date: "2025-06-27",
    summary: "Los flujos de remesas registran un nuevo récord en el primer semestre del año."
  }
];

const FXNewsWidget = () => {
  return (
    <div className="p-4 mt-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Noticias del Mercado FX</h2>
      <ul className="space-y-3">
        {dummyNews.map((news, index) => (
          <li key={index} className="border-b pb-2">
            <p className="text-sm font-semibold">{news.title}</p>
            <p className="text-xs text-gray-500">{news.date}</p>
            <p className="text-sm text-gray-700">{news.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FXNewsWidget;
