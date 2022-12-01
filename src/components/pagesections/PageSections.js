import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import Inicio from '../../pages/Inicio';
import TratamientoEmergencia from '../../pages/TratamientoEmergencia';
import Devoluciones from '../../pages/Devoluciones';

const Container = styled.div`
  
    height: 43.75rem;
    margin-top: 2rem;
    margin-left: 3.125rem;
`

const PageSections = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Tratamiento" element={<TratamientoEmergencia/>} />
        <Route path="/Devoluciones" element={<Devoluciones/>} />
      </Routes>
    </Container>
  )
}

export default PageSections
