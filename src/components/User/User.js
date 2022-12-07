import React from 'react';
import styled from 'styled-components';
import Username from './Username';

const Container = styled.div`
    display: flex;
    justify-content : space-between;
    align-items: center;
    padding-bottom:0.3125rem;
    border-bottom: 2px solid black;
    margin-top:2.1875rem;
    margin-bottom:2rem;
    padding-bottom:1.5rem;

`
const WorkerName =styled.div`    

`
const Name = styled.div`

    margin-bottom: 0.3125rem;
    font-style: normal; 
    font-weight: 700;
    font-size: 24px;
    line-height: 1.75rem;
    color: #000000;
`
const Area = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-transform: capitalize;
    color: #C2C2C9;
`

const User = () => {
  return (
    <Container>
      <WorkerName>
        <Name>Alberto Basabe</Name>
        <Area>Administrador</Area>
      </WorkerName>
      <Username/>
    </Container>
  )
}

export default User
