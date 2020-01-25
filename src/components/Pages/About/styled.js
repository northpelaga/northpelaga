import {styled} from 'linaria/react';

import {colWidth, lineWidth} from '../../../constants';

const offset = 26;
const imgWidth = 293;

export const Wrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 143px;
`;

export const Info = styled.div`
  display: flex;
`;

export const Picture = styled.div`
  margin-left: -${offset}px;

  position: relative;
  display: table;

  img {
    display: block;
    width: ${imgWidth}px;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';

    background: rgba(255, 255, 255, 0.4);

    top: 0;
    bottom: 0;

    z-index: 2;
  }

  &::before {
    left: 0;
    width: ${offset}px;
  }

  &::after {
    right: 0;
    width: ${imgWidth - offset - (colWidth + lineWidth) * 2 - 2}px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  margin-left: 38px;

  color: #1b1b1b;
`;
