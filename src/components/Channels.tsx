import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ChannelsTitles = styled.div`
	margin: 2rem 0 1rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	h2 {
		font-size: 1rem;
	}
`;

const ChannelItem = styled.li`
	margin: 0.25rem 0;
`;

const Button = styled.button`
	background-color: transparent;
	padding: 5px;
	color: white;
	border: none;
	font-size: 1rem;

	&.channel-button{
		margin-top: 1rem;
	}
`;

const ChannelPlusIcon = styled(FontAwesomeIcon)`
	margin-right: 5px;
`;

export interface Channel {
  id: string;
  name: string; 
}

interface ChannelProps {
  channels: Channel[]
}

function Channels({channels}: ChannelProps) {
  // const channels = ['announcements', 'general', 'frontend', 'backend', 'randaom'];

  return (
    <>
      <ChannelsTitles>
        <h2>Channels</h2>
        <FontAwesomeIcon icon={faPlus} />
      </ChannelsTitles>
      <ul>
        {channels.map(channel => (
          <ChannelItem key={channel.id}>
            #
            {' '}
            {channel.name}
          </ChannelItem>
        ))}
      </ul>
      <Button className="channel-button">
        <ChannelPlusIcon icon={faPlus} />
        Add channel
      </Button>
    </>
  );
}

export default Channels;