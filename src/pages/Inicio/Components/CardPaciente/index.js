import React from "react";
import { getDiffFecha, getFormatDate } from "../../../../helpers/util";

import "./index.css";

export const CardPaciente = ({admision}) => {
  return (
    <article className="cardPac__container" >
      <div className="cardPac__indicator"></div>
      <div className="cardPac__containerData">
        <div className="cardPac__persona">
          <div className="cardPac__data">
            <p>{admision.documento.numero_factura}</p>
            <p>{admision.documento.numero_identificacion.valor_identificacion}</p> 
          </div>
          <p className="cardPac_name">{`${admision.documento.persona.nombre} ${admision.documento.persona.apellido}`}</p>
        </div>
        <p>{`${getDiffFecha(admision.documento.persona.fecha_nacimiento,'year')} años`}</p>
        <p>{admision.documento.persona.sexo}</p>
        <p className="cardPac__diagnostico">{admision.documento.diagnostico ? admision.documento.diagnostico : '' }</p>
        <p className="cardPac__cama">{admision.cama.descripcion}</p>
        <div>
          <p>{getFormatDate(admision.fecha_de_atencion,'YYYY-MM-DD')}</p>
          <p>{getFormatDate(admision.fecha_de_atencion)}</p>
        </div>
        <p className="cardPac_cliente">
          {admision.documento.nombre_cliente}
        </p>
      </div>
    </article>
  );
};
