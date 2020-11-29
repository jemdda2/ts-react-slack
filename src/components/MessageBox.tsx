import { log } from 'console';
import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

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

function MessageBox() {
  const messageListRef = React.createRef<HTMLDivElement>();
	
  useEffect(() => {
    messageListRef.current!.scrollTo(
      messageListRef.current!.scrollTop, 
      messageListRef.current!.scrollHeight,
    );
  }, [messageListRef.current]);

  const messages = [
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
    {message: 'Illo voluptatem sint ut facere voluptatem sed in.', user: 'Ernesto.Maggio', date: 'Sat Nov 28 2020 19:24:54 GMT+0900 (日本標準時)' },
  ];

  return (
    <Container ref={messageListRef}>
      <ul>
        {messages.map((message, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <Username>
              {message.user} 
            </Username>
            <DateSpan>
              {new Intl.DateTimeFormat('en-GB').format(new Date(message.date))}
            </DateSpan>
            <p>{message.message}</p>
          </li>
        ) )}
      </ul>
    </Container>
  );
}

export default MessageBox;