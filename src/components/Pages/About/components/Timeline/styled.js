import {styled} from 'linaria/react';

import {colWidth, lineWidth} from '../../../../../constants';

const colOffset = 4;

export const Wrapper = styled.div`
  margin-top: 103px;
`;

export const Segment = styled.div`
  position: relative;

  padding-left: ${(colWidth + lineWidth) * colOffset + lineWidth}px;

  & + & {
    margin-top: 43px;
  }
`;

export const Item = styled.div`
  position: relative;

  padding-left: 20px;

  &::before {
    position: absolute;
    content: '';

    left: -5px;
    top: 7px;

    width: 10px;
    height: 10px;
    border-radius: 50%;

    background: #1b1b1b;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: #1b1b1b;
`;

export const Subtitle = styled.h3`
  margin-top: 14px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #1b1b1b;
`;

export const Date = styled.div`
  position: absolute;
  right: 100%;

  white-space: nowrap;

  top: 2px;

  padding-right: 21px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: rgba(27, 27, 27, 0.5);
`;
