import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowG from "../../assets/images/arrow-up-green.png";
import ArrowB from "../../assets/images/arrow-down-black.png";
import { getDocumentosActivos } from "../../services/Documentos";
import { getArea } from "../../services/Area";
import User from "../../components/User/User";
import { Menu } from "../../components/Menu";
import "./Inicio.css";
import { CardPaciente } from "./Components/CardPaciente";

const Img = styled.img`
  margin-right: 0.75rem;
  margin-left: 1.5rem;
`;
const Inicio = () => {
  const [selected, setSelected] = useState(null);
  const [Areas, setAreas] = useState([])
  const [admisiones, setAdmisiones] = useState([]);



  useEffect(() => {
    Promise.all([getArea(),getDocumentosActivos()]).then((res)=>{
      setAreas(res[0])
      setAdmisiones(res[1])
    })
  }, []);


  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);  
  };




  return (
    <div className="container">
      <Menu />
      <div className="container__background">
        <div className="container__inicio">
          <User />
          <div className="accordion">
            {Areas.map((item,index) => (
              <div className="item" key={item.area_atencion_id}>
                <div className="title" onClick={() => toggle(index)}>
                  <div className="accordion__title">
                    <img src={`./images/${item.descripcion_area}.png`} alt= {item.descripcion_area} height="25.008px" width="25.008px"  className="accordion__images"/>
                    
                    <h6 className={selected === index ? 'accordion__active':''}>{item.descripcion_area}</h6>
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
                {admisiones.map((admision)=>{
                 return admision.area_atencion === item.area_atencion_id ? <CardPaciente admision = {admision}/> : null
                })}
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
