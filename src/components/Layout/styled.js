import {styled} from 'linaria/react';

import {numberOfLines, colWidth, lineWidth} from '../../constants';

const width = (numberOfLines - 1) * colWidth + numberOfLines * lineWidth;

export const Wrapper = styled.div`
  padding: 28px;
  background-color: #f2f2f2;

  :global(body) {
    font-family: Montserrat, arial, sans-serif;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
`;

export const BackgroundFill = styled.div`
  background-color: #ffffff;
`;

export const Content = styled.div`
  width: ${width}px;
  margin: 0 auto;
  min-height: calc(100vh - 56px);

  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  position: absolute;
  z-index: -1;
  display: flex;

  width: ${width}px;
  left: 50%;

  transform: translate(-50%, 0);

  top: 0;
  bottom: 0;
`;

export const Line = styled.div`
  & + & {
    margin-left: ${colWidth}px;
  }

  height: 100%;
  width: ${lineWidth}px;
  background-color: #f6f6f6;
`;
