import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const submitMessageMutation = gql`
mutation SubmitMessage($userId: String!, $body: String, $channelId: uuid!){
  insert_Message(objects: {userId: $userId, body: $body, channelId: $channelId}) {
    returning {
      userId
      id
      body
      channelId
    }
  }
}
`;

function InputMessage() {
  return (
    <Mutation mutation={submitMessageMutation}>
      {(submitMessage: any, {data}: any) => (
        <form onSubmit={e => {
				  e.preventDefault();
          submitMessage({ variables: { 
            userId: 'user1', 
            channelId: '684a8b09-153a-4f7c-b078-38a64c819112', 
            body: (e.target as any).message.value }, 
          });
          (e.target as any).reset();
        }}
        >
          <InputStyle name="message" type="text" placeholder="Message Jisoon Kim" />
          <SubmitButton type="submit">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </SubmitButton>
        </form>
      )}
    </Mutation>
  );
}

const InputStyle = styled.input`
	padding: 1rem;
	border-radius: 7px;
	border: 3px solid darkgrey;
	font-size: 1rem;
	outline: none;
	&:hover, &:active, &:focus {
		border: 3px solid dimgray;
	}
	box-sizing: border-box;
	position: fixed;
	bottom: 10px;
	width: calc(100vw - 220px);
`;

const SubmitButton = styled.button`
	border-radius: 7px;
	outline: none;
	background-color: white;
	border: none;
	border-left: 3px solid darkgrey;
	position: fixed;
	box-sizing: border-box;
	padding: 1.125rem;
	right: 27px;
	bottom: 12.5px;
	cursor: pointer;
`;

export default InputMessage;