import {styled} from 'linaria/react';

import {colWidth, lineWidth} from '../../../constants';

export const Wrapper = styled.main`
  margin: auto 0;

  display: flex;
  min-height: calc(100vh - 56px - 80px);
  flex-direction: column;
  justify-content: center;

  .Cursor {
    display: none;
  }
`;

export const Greeting = styled.div`
  display: flex;

  height: 73px;
  margin-left: -4px;
`;

export const GreetingItem = styled.div`
  width: ${(p) => p.col * (colWidth + lineWidth)}px;

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

  transition: opacity 1s ease-in-out;
`;
