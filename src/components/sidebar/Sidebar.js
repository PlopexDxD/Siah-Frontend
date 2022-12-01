import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const Container = styled.div`
    background-color: #ffffff;
    width: 17.5rem;
    height: 100%;
    box-shadow: 0.25rem 0.25rem 0.625rem 0.25rem rgba(0, 0, 0, 0.05);
    overflow: hidden;
`

const Sidebar = () => {
  return (
    <Container>
      <SidebarItem/>
    </Container>
  )
}

export default Sidebar
