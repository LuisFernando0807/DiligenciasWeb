import React from "react";

const DiligenciaForm = () => {
  return (
    <section className="animate__animated animate__fadeIn">
      <div className="card shadow">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="fecha_diligencia">
                Fecha y Hora de registro:
              </label>
              <input
                type="datetime-local"
                id="fecha_diligencia"
                name="fecha_diligencia"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="solicitante_diligencia">Solicitante:</label>
              <input
                type="text"
                id="solicitante_diligencia"
                name="solicitante_diligencia"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cliente_diligencia">Cliente:</label>
              <input
                type="text"
                id="cliente_diligencia"
                name="cliente_diligencia"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="detalle_diligencia">Detalle Diligencia:</label>
              <input
                type="text"
                id="detalle_diligencia"
                name="detalle_diligencia"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fecha_entrega_diligencia">
                Fecha de Entrega:
              </label>
              <input
                type="datetime-local"
                id="fecha_entrega_diligencia"
                name="fecha_entrega_diligencia"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="direccion_diligencia">Dirección:</label>
              <input
                type="text"
                id="direccion_diligencia"
                name="direccion_diligencia"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="distrito_diligencia">Distrito:</label>
              <input
                type="text"
                id="distrito_diligencia"
                name="distrito_diligencia"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="adjunto_diligencia">Adjunto:</label>
              <input
                type="file"
                id="adjunto_diligencia"
                name="adjunto_diligencia"
                className="form-control"
              />
            </div>
            <br />
            <div className="form-group text-center">
              <button className="btn btn-primary" type="submit">
                Registrar Diligencia
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DiligenciaForm;
