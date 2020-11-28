import * as React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
	/* margin-top: 85px; */
	overflow-y: auto;
	height: calc(100vh - 185px);
`;

function MessageBox() {
  return (
    <Container>
      <ul>
        1234
      </ul>
    </Container>
  );
}

export default MessageBox;