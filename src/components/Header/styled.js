import React from 'react';

import {css} from 'linaria';
import {styled} from 'linaria/react';

import LogoIcon from './assets/logo.svg';

import {colWidth, lineWidth} from '../../constants';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  padding: 22px 0;
`;

export const Logo = styled(LogoIcon)`
  path {
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    path:first-child {
      transform: translate(2px, 0);
    }

    path:last-child {
      transform: translate(-2px, 0);
    }
  }
`;

export const Nav = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const NavText = styled.span`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    height: 12px;
    background-color: #f6f6f6;
    left: 0;
    right: 0;
    z-index: -1;
    top: -3px;

    transition: all 0.2s ease-in-out;

    opacity: 0;
    transform: translate(0, 5px);
  }
`;

export const NavItem = styled.div`
  width: ${colWidth + lineWidth}px;

  text-align: center;

  svg {
    display: block;
    margin: 0 auto;

    &:not(:hover) path:last-child {
      display: none;
    }

    &:hover {
      path:last-child {
        display: block;
      }
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

  &.active {
    ${NavText} {
      &::before {
        opacity: 1;
        transform: translate(0, 0px);
      }
    }
  }
`;
