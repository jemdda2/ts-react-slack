import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Status } from './Sidebar';
import { Channel } from './Channels';

const MessagesTitles = styled.div`
	margin: 2rem 0 1rem 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	h2 {
		font-size: 1rem;
	}
`;

const MessageItem = styled.li`
	margin: 0.25rem 0;
`;

interface DirectMessageProps {
  channels: Channel[];
}

const DirectMessage: React.FC<DirectMessageProps> = ({ channels }) => {
  return (
    <>
      <MessagesTitles>
        <div>Messages</div>
        <FontAwesomeIcon icon={faPlus} />
      </MessagesTitles>
      <ul>
        {channels.map(channel => (
          <MessageItem key={channel.id}>
            <Status />
            {channel.name}
          </MessageItem>
        ))}
      </ul>
    </>
  );
};

export default DirectMessage;