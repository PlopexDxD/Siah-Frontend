import React from 'react';
import './App.css';
import Dashboard from './container/Dashboard';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Dashboard/>
    </BrowserRouter>
  )
}

export default App

