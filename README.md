# MOZA Payments

![MOZA Payments Logo](https://github.com/erickmendozag/moza-payments/assets/branding/logo.png)

**Eslogan:** *Transferencias Globales con el Poder del MXNB*

---

## 🚀 Elevator Pitch

**MOZA Payments** es una plataforma web desarrollada para facilitar la adopción de **MXNB**, la primera stablecoin respaldada 1:1 por pesos mexicanos sobre la red Arbitrum. Nuestro enfoque se centra en personas físicas, PYMEs y empresas que necesitan enviar, recibir y convertir pagos en MXNB de forma instantánea, segura, sin intermediarios y sin comisiones.

---

## ✅ Funcionalidades Actuales

1. **Conexión con Metamask**  
2. **Consulta de Saldo (MXNB)**  
3. **Mint simulado de MXNB**  
4. **Transferencias MXNB (simuladas)**  
5. **Historial de Transacciones**  
6. **Directorio de beneficiarios frecuentes**  
7. **Tabla editable con Razón Social, Dirección y Representante Legal**  
8. **Comparación en tiempo real MXNB vs USDT/DAI/USDC (1:1 simulado)**  
9. **Panel de administración de direcciones**  
10. **Simulación de rastreo de transferencias internacionales**  
11. **Widget de noticias del mercado FX**  
12. **Visualización de transferencias agendadas (calendario)**  
13. **Cuenta Concentradora (envío/recepción/redención de MXNB a MXN)**  
14. **Componente de reportes mensuales por dirección**  
15. **InsightsCenter: gráficos de actividad, volumen y distribución**

---

## 🛠️ Stack Tecnológico

- **Frontend:** React + Vite  
- **Estilos:** Tailwind CSS  
- **Conexión Web3:** ethers.js + Metamask  
- **Despliegue:** Vercel  
- **Red:** Arbitrum Sepolia (testnet)  
- **Otros:** Chart.js, react-calendar, react-toastify  

---

## 📁 Estructura del Proyecto

```
/frontend
  ├── /src
  │   ├── components/
  │   │   ├── Wallet.jsx
  │   │   ├── Balance.jsx
  │   │   ├── TransactionHistory.jsx
  │   │   ├── AdminPanel.jsx
  │   │   ├── FXComparison.jsx
  │   │   ├── TransferMap.jsx
  │   │   ├── NewsWidget.jsx
  │   │   ├── ScheduledTransferCalendar.jsx
  │   │   ├── CentralAccountPanel.jsx
  │   │   ├── MonthlyReport.jsx
  │   │   └── InsightsCenter.jsx
  │   ├── abis/
  │   ├── App.jsx
  │   └── main.jsx
```

---

## 🧪 Instrucciones para Clonar y Ejecutar

```bash
git clone https://github.com/erickmendozag/moza-payments.git
cd moza-payments/frontend
npm install
npm run dev
```

Asegúrate de crear un archivo `.env` dentro de `/frontend/` con la siguiente variable:

```
VITE_MXNB_CONTRACT_ADDRESS=0xB6093B61544572Ab42A0E43AF08aBaFD41bf25A6
```

---

## 🔮 Próximos Pasos

- Integración con **Juno API** para emisión/redención MXNB vía CLABE  
- Integración con **Bitso Business API** para pagos internacionales y SPEI  
- Incorporación de wallets MPC embebidas con **Portal SDK**  
- Firma de transacciones e interoperabilidad móvil  

---

## 📬 Contacto

Proyecto creado por [@erickmendozag](https://github.com/erickmendozag) para el **MXNB Hackathon 2025**  
Versión Testnet - Arbitrum Sepolia

---

## 🧠 Licencia

MIT License © 2025 MOZA Payments
