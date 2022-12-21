import React, {useState} from 'react';
import styled from 'styled-components';
import { DatosPacienteData } from '../../data/DatosPacienteData';
import './DatosPaciente.css'

const LineGreen = styled.div`
    width: 10px;
    height: 24px;
    background: #2AC227;
`
const White = styled.div`
    width: 10px;
    height: 24px;
`

const DatosPaciente = ({ open, onClose }) => {

    const [currentTab, setCurrentTab] = useState();
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    const [selected, setSelected] = useState(null)

    const toggle = (index) => {
      if (selected === index) {
        return setSelected(null)
      }
      setSelected(index)
    }

    if (!open) return null;

  return (
    <div className='ContenedorModal'>
      <div className='SidebarModal'>
        <div className='Container'>
            <h1 className='Title' onClick={onClose}>Menu</h1>
            <div className='GreenLine'/>
            <div className='ContainerMenu'>
                {
                    DatosPacienteData.map((item, index)=>
                        <div className='ListItem' 
                            key={index}
                            id={item.id}
                            disabled= {currentTab === `${item.id}`} 
                            onClick={()=>{handleTabClick(); toggle(index);}}
                        >
                            <span>{selected === index ? <LineGreen/> : <White/>}</span>
                            {item.icon}
                            {item.title}
                        </div>
                    )
                }
            </div>
        </div>
      </div>
      <div className='MainModal'>
        {
            DatosPacienteData.map((item, index) =>
            <div key={index}>
                {currentTab === `${item.id}` &&
                    <div>
                        {item.content}
                    </div>   
                }
            </div>
        )}
      </div>
    </div>
  )
}

export default DatosPaciente

