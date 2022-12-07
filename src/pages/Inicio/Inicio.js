import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowG from "../../assets/images/arrow-up-green.png";
import ArrowB from "../../assets/images/arrow-down-black.png";
import { PageInicioData } from "../../data/PageInicioData";
import { getDocumento } from "../../services/Documentos.js";
import User from "../../components/User/User";
import { Menu } from "../../components/Menu";
import "./Inicio.css";

const Img = styled.img`
  width: 1.188rem;
  height: 1.063rem;
  margin-right: 0.75rem;
  margin-left: 1.5rem;
`;
const Inicio = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const [post, setPost] = useState([]);

  useEffect(() => {
    getDocumento().then((res) => {
      setPost(res);
    });
  }, []);

  return (
    <div className="container">
      <Menu />
      <div className="container__background">
        <div className="container__inicio">
          <User />
          <div className="accordion">
            {PageInicioData.map((item, index) => (
              <div className="item" key={index}>
                <div className="title" onClick={() => toggle(index)}>
                  <div className="accordion__title">
                    <span>{item.icon}</span>
                    <h6 className={selected === index ? 'accordion__active':''}>{item.title}</h6>
                  </div>
                  <span>
                    {selected === index ? (
                      <Img src={ArrowG} />
                    ) : (
                      <Img src={ArrowB} />
                    )}
                  </span>
                </div>
                <div
                  className={selected === index ? "content show" : "content"}
                >
                  {/*{post.numero_factura}
              {post.fecha_elaboracion}
              {post.area_atencion.descripcion_area}
              {post.persona.nombre}
              {post.persona.apellido}*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
