import React from 'react';
import styled from 'styled-components';
import PageSections from '../pagesections/PageSections';
import User from './User';

const Container = styled.div`
  margin: 0 1.5rem 0 1.5rem
`

const BlackLine = styled.div`
  width: 80%;
  height: 0px;
  
  margin-left: 1.5rem;
`
const Main = () => {
  return (
    <Container>
      <User/> 
     
      <PageSections/>
    </Container>
  )
}

export default Main
