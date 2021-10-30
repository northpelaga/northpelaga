import React from 'react';

import {Link} from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';

import Telegram from './assets/telegram.svg';
import Mail from './assets/mail.svg';

import {Wrapper, Logo, Nav, NavItem, NavText, linkCss} from './styled';

const Header = () => {
  const links = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Work',
      to: '/portfolio',
    },

    // {
    //   text: 'About',
    //   to: '/about',
    // },
  ];

  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>

      <Nav>
        {links.map((link, index) => (
          <TransitionLink
            className={linkCss}
            activeClassName="active"
            to={link.to}
            exit={{length: 0.5}}
            entry={{length: 0.5}}
          >
            <NavItem key={index}>
              <NavText>{link.text}</NavText>
            </NavItem>
          </TransitionLink>
        ))}

        <a href="https://t.me/northpelaga" target="_blank" rel="noreferrer">
          <NavItem>
            <Telegram />
          </NavItem>
        </a>

        <a href="mailto:northpelaga@gmail.com">
          <NavItem>
            <Mail />
          </NavItem>
        </a>
      </Nav>
    </Wrapper>
  );
};

export default Header;
