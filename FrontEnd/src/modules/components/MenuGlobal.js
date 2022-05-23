import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import imgNuevaDiligencia from "../../assets/img/nueva_diligencia.png";
import imgBuscarDiligencia from "../../assets/img/buscar_diligencia.png";
import "../../styles/menu.css";
import DiligenciaForm from "../client/components/DiligenciaForm";

const MenuGlobal = () => {
  const [formCrear, setFormCrear] = useState(false);
  const handleClose = () => setFormCrear(false);

  return (
    <div className="row tituloMenu">
      <h3 className="fw-bold">
        Bienvenido al Portal de Diligencias - Créditos y Cobranzas
      </h3>
      <div className="list-container">
        <ul className="list">
          <li className="item">
            <Link
              className="btn"
              onClick={() => {
                setFormCrear(!formCrear);
              }}
            >
              <div className="opcionImg">
                <img
                  src={imgNuevaDiligencia}
                  height="600px"
                  alt="nuevaDiligencia"
                />
              </div>
              <div className="text">Registrar Diligencia</div>
            </Link>
          </li>
          <li className="item">
            <Link to="/consulta-diligencia" className="btn">
              <div className="opcionImg">
                <img
                  src={imgBuscarDiligencia}
                  height="600px"
                  alt="buscarDiligencia"
                />
              </div>
              <div className="text">Buscar Diligencia</div>
            </Link>
          </li>
        </ul>
      </div>

      <Modal show={formCrear} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Diligencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DiligenciaForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MenuGlobal;
