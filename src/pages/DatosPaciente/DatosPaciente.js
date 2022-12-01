import React from 'react';
import DatosPacienteHeader from './components/DatosPacienteHeader/DatosPacienteHeader';
import DatosPacienteSecciones from './components/DatosPacienteSecciones/DatosPacienteSecciones';
import DatosPacienteSidebar from './components/DatosPacienteSidebar/DatosPacienteSidebar';
import './DatosPaciente.css';

const DatosPaciente = ({open}) => {
    if(!open) return null;
  return (
    <div className='modalContenedor'>
      <div className='modalSidebar'>
        <DatosPacienteSidebar/>
      </div>
      <div className='modalMain'>
        <div className='modalHeader'>
          <h3>Datos del paciente:</h3>
          <DatosPacienteHeader/>
        </div>
        <div className='modalSeccionesSidebar'>
          <h2 className='consultas'>Consultas</h2>
          <DatosPacienteSecciones/>
        </div>
      </div>
    </div>
  )
}

export default DatosPaciente
