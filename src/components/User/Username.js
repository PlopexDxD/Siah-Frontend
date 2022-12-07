import React, {useState}  from 'react';
import User from '../../assets/images/bx-user-circle 1.png';
import Arrow from '../../assets/images/arrow-down-black.png';
import styled from 'styled-components';
import {ModalUser} from './ModalUser/ModalUser';

const Container = styled.div`
    display: flex;
    align-items: center;
  
`
const Nickname = styled.h2`
    font-style: normal;
    font-size: 1rem;
    font-weight: 400;
    
    color: #4A4C50;
  
    margin-left: 0.5rem;
`
const ImgUser = styled.img``

const ImgArrow = styled.img`
    width: 1rem;
    height: 0.75rem;
    margin-left: 0.688rem;
    cursor: pointer;
`

const Username = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container   onClick={()=>{
      setModalOpen(true)
    }}
    onMouseLeave ={ ()=>{
      setModalOpen(false)
    }}
    >
        <ImgUser src={User}/>
        <Nickname>Abasabe</Nickname>
        <ImgArrow src={Arrow}
        
        />

        {modalOpen && <ModalUser setModalOpen={setModalOpen}/>}
    </Container>
  )
}

export default Username