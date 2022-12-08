import React from "react";
import "./index.css";

export const CardPaciente = () => {
  return (
    <article className="cardPac__container" >
      <div className="cardPac__indicator"></div>
      <div className="cardPac__containerData">
        <div className="">
          <div className="cardPac__data">
            <p>1023199</p>
            <p>15809747</p>
          </div>
          <p className="cardPac_name">Yoselin Carolina Flores Caraballo</p>
        </div>
        <p>46 años</p>
        <p>Femenino</p>
        <p className="cardPac__diagnostico">Rinoplastia</p>
        <p>Emergencia</p>
        <div>
          <p>05-08-2022</p>
          <p>11:22 AM</p>
        </div>
        <p className="cardPac_cliente">
          SERVICIO NACIONAL INTEGRADO DE ADMINISTRACION ADUANERA Y TRIBUTARIA
          (SENIAT)
        </p>
      </div>
    </article>
  );
};
