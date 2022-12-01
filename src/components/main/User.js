import React from 'react';
import styled from 'styled-components';
import Username from './Username';

const Container = styled.div`
    height: 6.5rem;
    margin-left: 1.5rem;
    display: flex;
    justify-content : space-between;
    border-bottom: 2px solid black;

`
const WorkerName =styled.div`
    width: 13.063rem;
    height: 3.75rem;
    margin-left: 3.125rem;
    padding-top: 1.563rem;
`
const Name = styled.div`
    width: 13rem;
    height: 1.688rem;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #000000;
`
const Area = styled.div`
    width: 9.5rem;
    height: 1.625rem;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.75rem;
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
