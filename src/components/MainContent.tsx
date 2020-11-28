import * as React from 'react';
import styled from 'styled-components/macro';
import MainContentHeader from './MainContentHeader';
import MessageBox from './MessageBox';
import InputMessage from './Input';

const Container = styled.div`
  padding: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

function MainContent() {
  return (
    <Container>
      <MainContentHeader />
      <MessageBox />
      <InputMessage />
    </Container>
  );
}

export default MainContent;