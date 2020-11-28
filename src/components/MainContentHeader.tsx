import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Container = styled.div`
	display: flex;
	top: 0;
	z-index: 5;
	background-color: white;
	/* width: calc(100vw - 180px); */
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 1rem 0;
	border-bottom: 1px solid lightgray;
`;

const Title = styled.div`
	h3 {
		font-weight: 900;
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
	}
`;

const UserIcon = styled(FontAwesomeIcon)`
	margin-right: 0.5rem;
	color: darkgray;
`;

const Input = styled.input`
	border: 1px solid darkgray;
	padding: 0.5rem;
	border-radius: 5px;
	outline: none;
	&::placeholder{
		font-size: 1rem;
	}
	&:hover, &:active, &:focus{
		border: 1px solid DimGray;
	}
`;

function MainContentHeader() {
  return (
    <Container>
      <Title>
        <div>
          <h3>#general</h3>
        </div>
        <div>
          <UserIcon icon={faUser} />
          42 members
        </div>
      </Title>
      <div>
        <Input type="text" placeholder="search" />
      </div>
    </Container>
  );
}

export default MainContentHeader;