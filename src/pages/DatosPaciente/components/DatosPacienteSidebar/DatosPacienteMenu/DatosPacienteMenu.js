import React, {useState} from 'react';
import styled from 'styled-components';
import { DatosPacienteData } from '../../../../../data/DatosPacienteData';
import { NavLink } from "react-router-dom";

const Contenedor = styled.div`
    position: absolute;
    top: 8.938rem;
    left: 0px;
    width: 16.625rem;
    height: 31rem;
    overflow: hidden;
`
const ListItem = styled.div`
    width: 18.75rem;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.188rem;
    margin-bottom: 1.125rem;
    cursor: pointer;
    display: flex;
`
const GreenLine = styled.div`
    width: 10px;
    height: 24px;
    background: #2AC227;
`
const White = styled.div`
    width: 10px;
    height: 24px;
`

const DatosPacienteMenu = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (index) => {
      if (selected === index) {
        return setSelected(null)
      }
      setSelected(index)
    }    

  return (
    <Contenedor>
        {
          DatosPacienteData.map((item, index)=>{
            return(
              <NavLink to={item.path}
              style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItem key={index} onClick={() => toggle(index)}>
                    <span>{selected === index ? <GreenLine/> : <White/>}</span>
                    {item.icon}
                    {item.title}
                </ListItem>
              </NavLink>
            )
          })
        }
    </Contenedor>
  )
}

export default DatosPacienteMenu
