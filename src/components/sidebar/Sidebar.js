import React from 'react';
import styled from 'styled-components';
import Menu from './menu/Menu';

const Container = styled.div`
  background-color: #ffffff;
  width: 17.5rem;
  height: 100%;
  box-shadow: 0.25rem 0.25rem 0.625rem 0.25rem rgba(0, 0, 0, 0.05);
  overflow: hidden;
`
const Container2 = styled.div`
  width: 3.813rem;
  height: 1.75rem;
  margin-top: 2.188rem;
  margin-left: 1.438rem;
` 
const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #000000;
`
const GreenLine = styled.div`
  width: 14.688rem;
  height: 0px;
  border: 0.063rem solid #2AC227;
  margin-top: 2.563rem;
`
const Sidebar = () => {
  return (
    <Container>
      <Container2>
        <Title>Menu</Title>
        <GreenLine/>
        <Menu/>
      </Container2>
    </Container>
  )
}

export default Sidebar
