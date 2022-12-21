import React from 'react'
import { Outlet } from 'react-router-dom'
import { InfoPaciente } from './Components/InfoPaciente'
import { Menu } from './Components/Menu'

export const Admision = () => {
  return (
    <div>
        <InfoPaciente/>
        <Menu/>
        <Outlet/>
    </div>
  )
}
