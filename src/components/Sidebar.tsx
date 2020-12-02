import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import DirectMessages from './DirectMessage';
import Channels, { Channel } from './Channels';

const membershipQuery = gql`
{
  Membership(where: {userId: {_eq: "user1"}}) {
    id
    direct
    Channel {
      id
      name
    }
  }
}
`;

const SidebarContainer = styled.div`
	height: 100%;
	background: rebeccapurple;
	padding: 1rem;
	color: white;
  box-sizing: border-box;
`;

const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr 25px;
	color: white;
	font-size: 1.2rem;
`;

const H1 = styled.h1`
	font-weight: 900;
	font-size: 1.3rem;
`;

const UsernameContainer = styled.div`
	font-size: 1rem;
	grid-column-start: 1;
	grid-column-end: 3;
	margin-top: 0.5rem;
`;

export const Status = styled.span`
	height: 0.7rem;
	width: 0.7rem;
	border-radius: 100%;
	background-color: green;
	margin-right: 0.5rem;
	display: inline-block;
`;

interface Membership {
  direct: boolean;
  id: string;
  Channel: Channel;
}

function Sidebar() {
  return (
    <Query query={membershipQuery}>
      {({loading, error, data}: any) => (
        <SidebarContainer>
          <Header>
            <H1>Slack clone</H1>
            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
            <UsernameContainer>
              <Status />
              Jisoon Kim
            </UsernameContainer>
          </Header>
          {!loading && data.Membership? (
            <>
              <Channels channels={(data.Membership as Membership[]).filter(membership => !membership.direct).map(membership => membership.Channel)} />
              <DirectMessages channels={(data.Membership as Membership[]).reduce((acc, value) => {
                if (value.direct) {
                  return [...acc, value.Channel];
                }
                return acc;
              }, [] as Channel[])}
              />
            </>
          ) : null}
        </SidebarContainer>
      )}
    </Query>
  );
}

export default Sidebar;