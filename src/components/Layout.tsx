import * as React from 'react';
import styled from 'styled-components/macro';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const Container = styled.div`
	display: grid;
  grid-template-columns: 180px 1fr;
	/* width: 100vw; */
	height: 100vh;
`;


function Layout() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

export default Layout;