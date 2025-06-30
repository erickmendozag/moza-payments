import React, { useEffect, useState } from "react";

const SmartAlerts = ({ exchangeRate = 18.25, averageRate = 18.80, commissionSaved = 0 }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const newAlerts = [];

    if (exchangeRate < averageRate) {
      newAlerts.push("🔔 Tipo de cambio actual es más favorable que la media semanal. ¡Aprovecha para transferir!");
    }

    if (commissionSaved > 0) {
      newAlerts.push(`💬 Has ahorrado aproximadamente $${commissionSaved.toFixed(2)} MXN en comisiones usando MOZA Payments.`);
    }

    newAlerts.push("📢 Nuevo: ahora puedes registrar múltiples wallets desde el mismo panel.");
    newAlerts.push("📰 Última noticia: “Banxico anuncia nuevas medidas que afectan las remesas desde EE.UU.”");

    setAlerts(newAlerts);
  }, [exchangeRate, averageRate, commissionSaved]);

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded shadow-sm mt-4">
      <h2 className="font-semibold mb-2">📣 Alertas y Noticias</h2>
      <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-800">
        {alerts.map((alert, idx) => (
          <li key={idx}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmartAlerts;
