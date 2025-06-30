// src/components/TransactionTracker.jsx
import React from "react";

const trackingSteps = [
  "Transferencia iniciada",
  "Verificación del emisor",
  "Procesamiento en red SWIFT",
  "Conversión de divisa en curso",
  "Envío hacia banco receptor",
  "Confirmación del receptor",
  "Transferencia completada"
];

const TransactionTracker = ({ currentStep = 3 }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Rastreo de Transferencia Internacional</h2>
      <ol className="relative border-l border-gray-300">
        {trackingSteps.map((step, index) => (
          <li key={index} className="mb-4 ml-6">
            <span
              className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-4 ring-white ${
                index <= currentStep
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            ></span>
            <p className={`text-sm ${index === currentStep ? "font-bold text-green-700" : ""}`}>{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TransactionTracker;
