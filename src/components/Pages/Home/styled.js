import {styled} from 'linaria/react';

import {colWidth, lineWidth} from '../../../constants';

export const Wrapper = styled.main`
  margin: auto 0;
`;

export const Greeting = styled.div`
  display: flex;
`;

export const GreetingItem = styled.div`
  width: ${p => p.col * (colWidth + lineWidth)}px;

  font-weight: bold;
  font-size: 60px;
  line-height: 73px;

  color: #1b1b1b;
`;

export const About = styled.p`
  width: 605px;
  margin-top: 55px;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: #1b1b1b;
`;
