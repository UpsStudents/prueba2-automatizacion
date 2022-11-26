import { Formik } from "formik";
import { FacturasService } from "../servicios/factura.service";
import "./facturaForm.css";

export interface IFacturaFormProps {
  onCreate: () => void;
}

export const FacturaForm: React.FC<IFacturaFormProps> = ({ onCreate }) => {
  return (
    <div>
      <Formik
        initialValues={{
          detalle: "",
          fecha: "",
          valor: 0,
          idCliente: "",
        }}
        onSubmit={(values, helper) => {
          FacturasService.createFactura(values).then(() => {
            onCreate();
            helper.resetForm();
          });
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="create-factura-form">
            <div>
              <label htmlFor="detalle">Detalle:</label>
              <input
                id="detalle"
                type="text"
                name="detalle"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.detalle}
              />
            </div>
            <div>
              <label htmlFor="fecha">Fecha:</label>
              <input
                id="fecha"
                type="text"
                name="fecha"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fecha}
              />
            </div>
            <div>
              <label htmlFor="valor">Valor:</label>
              <input
                id="valor"
                type="number"
                name="valor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.valor}
              />
            </div>
            <div>
              <label htmlFor="idCliente">Id Cliente:</label>
              <input
                id="idCliente"
                type="text"
                name="idCliente"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.idCliente}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Crear
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
