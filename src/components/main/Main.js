import React from 'react';
import styled from 'styled-components';
import PageSections from '../sidebar/pagesections/PageSections';
import {Header} from './Components/Header/Header';


const Container = styled.div`
    margin-right: 1.5rem;
`

//const BlackLine = styled.div`
//  width: 80%;
//  height: 0px;  
//  margin-left: 1.5rem;
//`

const Main = () => {
  return (
    <Container> 
      <Header/>      
      <PageSections/>
    </Container>
  )
}

export {Main}
