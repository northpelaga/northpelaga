import {css} from 'linaria';
import {styled} from 'linaria/react';

import {colWidth, lineWidth} from '../../constants';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  padding: 22px 0;
`;

export const Nav = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  width: ${colWidth + lineWidth}px;

  svg {
    display: block;

    &:not(:hover) path:last-child {
      display: none;
    }
  }
`;

export const linkCss = css`
  color: #1b1b1b;
  text-decoration: none;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  text-transform: uppercase;

  &:hover,
  &.active {
    font-weight: 600;
  }
`;
