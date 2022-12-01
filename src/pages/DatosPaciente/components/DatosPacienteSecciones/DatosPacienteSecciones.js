import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import Consultas from '../../../PagesModal/Consultas';
import Evolucion from '../../../PagesModal/Evolucion';

const Container = styled.div`
    background-color: #ECEDEF;
    height: 75vh;
    margin: 2rem 2rem 5rem 2rem;
    border-radius: 30px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`

const DatosPacienteSecciones = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Consultas/>}/>
        <Route path='/Evoluicon' element={<Evolucion/>}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </Container>
  )
}

export default DatosPacienteSecciones
