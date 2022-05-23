import React from "react";

import imgRecicloplas from "../../../../assets/img/recicloplas.png";
import imgPamolsa from "../../../../assets/img/pamolsa_color.png";
import imgMolpack from "../../../../assets/img/molpack_color.png";
import imgDespro from "../../../../assets/img/despro_color.png";
import "../../../../styles/login.css";

const AuthLoginScreen = () => {
  return (
    <div class="row noScrollbar">
      <div className="col imagenLogin img-fluid"></div>

      <div className="col formLogin ">
        <h2 className="fw-bold text-center py-5">
          PORTAL DE DILIGENCIAS <br /> CRÉDITOS Y COBRANZAS
        </h2>
        <form action="#" className="">
          <div className="b-4 mx-auto">
            <label for="email" className="form-label">
              <b>Correo:</b>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="ejemplo@carvajal.com"
            ></input>
          </div>
          <div className="b-4">
            <label for="password" className="form-label">
              <b>Contraseña:</b>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
            ></input>
          </div>
          <br />
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </div>

          <div className="my-3">
            <span>
              No tienes cuenta? <a href="#">Regístrate</a>
            </span>{" "}
            <br />
            <span>
              <a href="#">Recuperar Contraseña</a>
            </span>
          </div>
        </form>
        <div className="container w-100 my-5">
          <div className="row align-items-center">
            <div className="col">
              <h4 className="fw-bold text-center">EMPRESAS</h4>
              <div className="row logosEmpresas">
                <div className="col-2 d-none d-md-block logoRecicloplas">
                  <img src={imgRecicloplas} height="150px" alt="Recicloplas" />
                </div>
                <div className="col-2 d-none d-md-block logoPamolsa">
                  <img src={imgPamolsa} height="150px" alt="Pamolsa" />
                </div>
                <div className="col-2 d-none d-md-block logoDespro">
                  <img src={imgDespro} height="150px" alt="Despro" />
                </div>
                <div className="col-2 d-none d-md-block logoMolpack">
                  <img src={imgMolpack} height="120px" alt="Molpack" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLoginScreen;
