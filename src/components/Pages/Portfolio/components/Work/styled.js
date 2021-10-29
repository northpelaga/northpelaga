import {styled} from 'linaria/react';

// import Img from 'gatsby-image/withIEPolyfill';
// import {GatsbyImage} from 'gatsby-plugin-image';

import {colWidth, lineWidth} from '../../../../../constants';

const dateWidth = colWidth + lineWidth * 2;

export const Wrapper = styled.div`
  & + & {
    margin-top: 50px;
  }

  padding-right: ${dateWidth - lineWidth}px;
`;

export const Date = styled.div`
  width: ${dateWidth}px;

  position: relative;
  padding-left: 20px;

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

export const Year = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;

  color: #1b1b1b;
`;

export const Content = styled.div`
  padding-left: ${dateWidth}px;
`;

export const Header = styled.div`
  margin-bottom: 40px;
  height: 40px;

  display: flex;
  align-items: center;

  padding-left: ${p => (p.withDate ? 0 : dateWidth)}px;
`;

export const TagWrapper = styled.div`
  margin-left: auto;

  width: ${colWidth + 2 * lineWidth}px;
`;

export const Tag = styled.div`
  display: table;

  border: 2px solid #f6f6f6;
  border-radius: 2px;
  padding: 2px 14px;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  cursor: default;

  color: #1b1b1b;

  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  a {
    text-decoration: none;

    color: #1b1b1b;

    &:visited {
      color: #1b1b1b;
    }
  }
`;

// export const Preview = styled(GatsbyImage)`
//   display: block;
//   width: 100%;
// `;
