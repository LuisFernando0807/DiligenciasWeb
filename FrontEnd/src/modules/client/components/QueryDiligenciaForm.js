import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/querydiligencia.css";
import "../../../styles/table.css";
import iconoBuscar from "../../../assets/img/019-buscar.png";

const QueryDiligenciaForm = () => {
  return (
    <section className="animate__animated animate__fadeIn">
      <div className="form-box">
        <div className="contenedor">
          <img src={iconoBuscar} height="50px" className="posicionTitulo"></img>
          <b className="tituloFormulario posicionTitulo">
            Consultas de Diligencias
          </b>
          <Link to="/Menu">
            <div id="boton" className="claseBoton1 claseBoton2">
              <button
                id="buscar"
                type="button"
                className="claseInternaBoton btn-sm claseBoton2"
              >
                Regresar
              </button>
            </div>
          </Link>
        </div>

        <div className="contenedor parametrosForm">
          <form>
            <div className="row col-sm-6 col-md-12">
              <div className="form-group col-md-3 divFiltros">
                <b>
                  <label htmlFor="id_diligencia"> Código Diligencia:</label>
                </b>
                <input
                  type="text"
                  id="id_diligencia"
                  name="id_diligencia"
                  placeholder="Ingrese código"
                  className="form-control input-text"
                />
              </div>
              <div className="form-group col-md-3 divFiltros">
                <b>
                  <label htmlFor="cliente_diligencia"> Cliente:</label>
                </b>
                <input
                  type="text"
                  id="cliente_diligencia"
                  name="cliente_diligencia"
                  placeholder="Ingrese cliente"
                  className="form-control input-text"
                />
              </div>
              <div className="form-group col-md-3 divFiltros">
                <b>
                  <label htmlFor="fecha_diligencia">Fecha:</label>
                </b>
                <input
                  type="date"
                  id="fecha_diligencia"
                  name="fecha_diligencia"
                  className="form-control input-text"
                />
              </div>

              <div className="row col-sm-6 col-md-12">
                <div className="form-group col-md-3 divFiltros">
                  <b>
                    <label htmlFor="distrito_diligencia">Distrito:</label>
                  </b>
                  <input
                    type="text"
                    id="distrito_diligencia"
                    name="distrito_diligencia"
                    placeholder="Ingrese distrito"
                    className="form-control input-text"
                  />
                </div>
                <div className="form-group col-md-3 divFiltros">
                  <b>
                    <label htmlFor="motorizado_diligencia">Motorizado:</label>
                  </b>
                  <input
                    type="text"
                    id="motorizado_diligencia"
                    name="motorizado_diligencia"
                    placeholder="Ingrese motorizado"
                    className="form-control input-text"
                  />
                </div>
                <div id="boton" className="claseBoton1 claseBoton2">
                  <button
                    id="buscar"
                    type="button"
                    className="claseInternaBoton btn-sm claseBoton2"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="contenedor">
          Tabla de Contenido
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Fecha Registro</th>
                  <th>Cliente</th>
                  <th>Detalle</th>
                  <th>Fecha Entrega</th>
                  <th>Distrito</th>
                  <th>Dirección</th>
                  <th>Motorizado</th>
                  <th>Estado</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryDiligenciaForm;
