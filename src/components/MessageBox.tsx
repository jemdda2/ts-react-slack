import gql from 'graphql-tag';
import React, { useEffect } from 'react';
import { Query, Subscription } from 'react-apollo';
import styled from 'styled-components/macro';

const messageQuery  = gql`
{
  Message (where: {channelId: {_eq: "684a8b09-153a-4f7c-b078-38a64c819112"}}) {
    body
    date
    User{
      username
    }
  }
}
`;

const messageSubscription = gql`
{
  subscription {

    Message (where: {channelId: {_eq: "684a8b09-153a-4f7c-b078-38a64c819112"}}) {
      body
      date
      User{
        username
      }
    }
  }
}

`;

interface Message {
  id: string;
  body: string;
  date: string;
  User: {
    username: string;
  }
}

const MessageItem = () => {
   
};

function MessageBox() {
  const messageListRef = React.createRef<HTMLDivElement>();
	
  useEffect(() => {
    messageListRef.current!.scrollTo(
      messageListRef.current!.scrollTop, 
      messageListRef.current!.scrollHeight,
    );
  }, [messageListRef]);

  return (
    <Subscription subscription={messageQuery}>
      {({ data, loading }: any) => {
        // subscribeToMore({
        // document: messageSubscription,
        // updateQuery: (prev: Message[], { subscriptionData }: any) => {
        //   if (!subscriptionData.data) return prev;
        // const newFeedItem = subscriptionData.data.commentAdded;

        // return Object.assign({}, prev, {
        //   entry: {
        //     comments: [newFeedItem, ...prev.entry.comments]
        //   }
        // });
        //   },
        // });
        return (
          <Container ref={messageListRef}>
            <ul>
              {!loading && data.Message ? (data.Message as Message[]).map((message) => (
                <li key={message.id}>
                  <Username>
                    {message.User.username} 
                  </Username>
                  <DateSpan>
                    {/* {new Intl.DateTimeFormat('en-GB').format(new Date(message.date))} */}
                    {message.date}
                  </DateSpan>
                  <p>{message.body}</p>
                </li>
              )) : null}
            </ul>
          </Container>
        );
      }}
    </Subscription>
  );
}

const Container = styled.div`
	margin-top: 85px;
	overflow-y: auto;
	height: calc(100vh - 185px);
	li {
		margin: 0.5rem 0;
	}
	p {
		margin-top: 0.25rem;
	}
`;

const Username = styled.span`
	font-weight: 800;
	margin-right: 5px;
	font-size: 1.2rem;
`;

const DateSpan = styled.span`
	color: darkgray;
`;

export default MessageBox;
