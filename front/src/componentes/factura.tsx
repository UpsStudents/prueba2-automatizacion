import "./factura.css";
export interface IFacturaProps {
  id: number;
  detalle: string;
  fecha: string;
  valor: number;
  idCliente: string;
  onDelete?: (idCliente: number) => void;
}

export const Factura: React.FC<IFacturaProps> = ({
  id,
  detalle,
  fecha,
  valor,
  idCliente,
  onDelete,
}) => {
  return (
    <div className="factura">
      <h2>Factura</h2>
      <p>
        <strong>Id: </strong>
        {id}
      </p>
      <p>
        <strong>Detalle: </strong>
        {detalle}
      </p>
      <p>
        <strong>Fecha: </strong>
        {fecha}
      </p>
      <p>
        <strong>Valor: </strong>
        {valor}
      </p>
      <p>
        <strong>Id Cliente: </strong>
        {idCliente}
      </p>
      <button
        onClick={() => {
          onDelete && onDelete(id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};
