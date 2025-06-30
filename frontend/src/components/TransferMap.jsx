import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const simulatedTransfers = [
  {
    name: "México → Estados Unidos",
    coords: [-99.1332, 19.4326], // Ciudad de México
    toCoords: [-74.006, 40.7128], // Nueva York
  },
  {
    name: "México → Colombia",
    coords: [-99.1332, 19.4326],
    toCoords: [-74.0721, 4.711],
  },
  {
    name: "México → España",
    coords: [-99.1332, 19.4326],
    toCoords: [-3.7038, 40.4168],
  },
  {
    name: "México → Japón",
    coords: [-99.1332, 19.4326],
    toCoords: [139.6917, 35.6895],
  },
];

const TransferMap = () => {
  return (
    <div className="mt-8 p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold mb-4">
        Mapa Global de Transferencias Simuladas
      </h2>
      <ComposableMap projection="geoEqualEarth" width={800} height={400}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#ECEFF1",
                    outline: "none",
                  },
                  hover: {
                    fill: "#CFD8DC",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#FF5722",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {simulatedTransfers.map((transfer, idx) => (
          <g key={idx}>
            <Marker coordinates={transfer.coords}>
              <circle r={5} fill="#FF5722" />
              <text
                textAnchor="middle"
                y={-10}
                style={{ fontFamily: "system-ui", fontSize: "10px" }}
              >
                Origen
              </text>
            </Marker>
            <Marker coordinates={transfer.toCoords}>
              <circle r={5} fill="#4CAF50" />
              <text
                textAnchor="middle"
                y={-10}
                style={{ fontFamily: "system-ui", fontSize: "10px" }}
              >
                Destino
              </text>
            </Marker>
          </g>
        ))}
      </ComposableMap>
    </div>
  );
};

export default TransferMap;
