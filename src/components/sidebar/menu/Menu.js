import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Container = styled.div`
    position: absolute;
    top: 8.938rem;
    left: 0px;
    width: 16.625rem;
    height: 18.75rem;
`

const Menu = () => {
  return (
    <Container>
      <MenuItem/>
    </Container>
  )
}

export default Menu
