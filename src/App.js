import React from 'react';
import './App.css';

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Inicio from './pages/Inicio/Inicio';
import TratamientoEmergencia from './pages/TratamientoEmergencia/TratamientoEmergencia';
import Devoluciones from './pages/Devoluciones/Devoluciones';


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Tratamiento" element={<TratamientoEmergencia/>} />
        <Route path="/Devoluciones" element={<Devoluciones/>} />
        {/* <Route path="/consulta/:id" element={<Consultas/>}/> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App

