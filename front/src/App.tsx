import React, { useState, useEffect } from "react";
import { Factura, IFacturaProps } from "./componentes/factura";
import { FacturasService } from "./servicios/factura.service";
import "./App.css";
import { FacturaForm } from "./componentes/facturaForm";
function App() {
  const [facturas, setFacturas] = useState<IFacturaProps[]>([]);

  useEffect(() => {
    FacturasService.getFacturas().then((facturas) => {
      setFacturas(facturas);
    });
  }, []);

  const deleteHandler = (id: number) => {
    FacturasService.deleteFactura(id).then(() => {
      setFacturas(facturas.filter((factura) => factura.id !== id));
    });
  };

  return (
    <div>
      <h1>Crear comprobante</h1>
      <FacturaForm
        onCreate={() => {
          FacturasService.getFacturas().then((facturas) => {
            setFacturas(facturas);
          });
        }}
      />
      <h1>Comprobantes</h1>
      <div className="facturas-container">
        {facturas.length > 0 &&
          facturas.map((factura) => (
            <Factura {...factura} onDelete={deleteHandler} />
          ))}
        {facturas.length === 0 && <p>No hay facturas</p>}
      </div>
    </div>
  );
}

export default App;
