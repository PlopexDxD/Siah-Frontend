import React, {useState}  from 'react';
import User from '../../assets/images/bx-user-circle 1.png';
import Arrow from '../../assets/images/arrow-down-black.png';
import styled from 'styled-components';
import ModalLogout from './modallogout/ModalLogout';

const Container = styled.div`
    display: flex;
    width: 14rem;
    height: 4rem;
    padding-top: 0.625rem;
`
const Nickname = styled.h2`
    width: 3.938rem;
    height: 1.188rem;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.188rem;
    color: #4A4C50;
    padding-top: 1.5rem;
    margin-left: 0.5rem;
`
const ImgUser = styled.img``

const ImgArrow = styled.img`
    width: 1rem;
    height: 0.75rem;
    padding-top: 1.563rem;
    margin-left: 0.688rem;
    cursor: pointer;
`

const Username = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
        <ImgUser src={User}/>
        <Nickname>Abasabe</Nickname>
        <ImgArrow src={Arrow}
          onClick={()=>{
            setModalOpen(true)
          }}
        />

        {modalOpen && <ModalLogout setModalOpen={setModalOpen}/>}
    </Container>
  )
}

export default Username