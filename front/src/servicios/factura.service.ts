import { FacturaDto } from "./factura.dto";

export const FacturasService = {
  getFacturas: async () => {
    const response = await fetch(`/facturas`);
    const data = await response.json();
    return data;
  },
  getFactura: async (id: number) => {
    const response = await fetch(`$/facturas/${id}`);
    const data = await response.json();
    return data;
  },
  createFactura: async (factura: FacturaDto) => {
    const response = await fetch(`/facturas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factura),
    });
    const data = await response.json();
    return data;
  },
  updateFactura: async (id: number, factura: FacturaDto) => {
    const response = await fetch(`/facturas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factura),
    });
    const data = await response.json();
    return data;
  },
  deleteFactura: async (id: number) => {
    const response = await fetch(`/facturas/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  },
};
