import {styled} from 'linaria/react';

// import Img from 'gatsby-image/withIEPolyfill';
// import {GatsbyImage} from 'gatsby-plugin-image';

import {colWidth, lineWidth} from '../../../constants';

const dateWidth = colWidth + lineWidth * 2;

export const Wrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 58px;

  padding-left: ${dateWidth}px;
  padding-right: ${dateWidth - lineWidth}px;
`;

export const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

export const Indent = styled.div`
  position: relative;
  padding-left: 20px;
  margin-left: 16px;

  &::before {
    position: absolute;
    content: '';

    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #1b1b1b;
    top: 7.5px;
    left: -4px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;

  color: #1b1b1b;
`;

export const Link = styled.a`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;

  color: #1b1b1b;
`;

// export const Preview = styled(GatsbyImage)`
//   display: block;
//   margin-top: 40px;
//   width: 100%;
// `;
