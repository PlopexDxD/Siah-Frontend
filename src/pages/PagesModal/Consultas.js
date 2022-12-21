import React, {useState} from 'react';
import styled from 'styled-components';
import ArrowG from '../../assets/images/arrow-up-green.png';
import ArrowB from '../../assets/images/arrow-down-black.png';
import './Consultas.css';
import { DatosPacienteConsultaData } from '../../data/DatosPacienteData';

const Img = styled.img`
    width: 1.188rem;
    height: 1.063rem;
    margin-right: 0.75rem;
    margin-left: 1.5rem;
`

const Consultas = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }

  return (
    <div className='contenedor'>
      <div className='especificaciones'>
        <h4>ROL MEDICO:</h4>
        <h4>PROFESIONAL:</h4>
        <h4>ESPECIALIDAD:</h4>
        <h4>ALTA MEDICA:</h4>
        <h4>FECHA:</h4>
      </div>
      {DatosPacienteConsultaData.map((item, index) => (
          <div className='item' key={index}>
            <div className='title' onClick={() => toggle(index)}>
              <h6>{item.icon}{item.title}</h6>
              <span>{selected === index ? <Img src={ArrowG}/> : <Img src={ArrowB}/>}</span>
            </div>
            <div className={selected === index ? 'content show' : 'content'}>
              
            </div>
          </div>
        ))}
    </div>
  )
}

export default Consultas
