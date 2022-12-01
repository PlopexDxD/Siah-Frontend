import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    position: fixed;
    top: 65px;
    right: 35px;
    background-color: #ffffff;
    width: 150px;
    height: 180px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const MenuItem = styled.div`
    height: 35px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
    padding-left: 15px;
    padding-top: 10px;
    cursor: pointer;
    display: flex;

    &:hover{
      background-color: #F5F5F5;
    }
`

const ModalLogout = ({setModalOpen}) => {
  return (
    <Menu>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem 
            onClick={()=>{
                setModalOpen(false)
            }}
        >Logout</MenuItem>
    </Menu>
  )
}

export default ModalLogout