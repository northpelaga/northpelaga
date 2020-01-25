import React from 'react';

import {Link} from 'gatsby';

import Logo from './assets/logo.svg';
import Telegram from './assets/telegram.svg';
import Mail from './assets/mail.svg';

import {Wrapper, Nav, NavItem, linkCss} from './styled';

const Header = () => {
  const links = [
    {
      text: 'Home',
      to: '/'
    },
    {
      text: 'Work',
      to: '/portfolio'
    },
    {
      text: 'About',
      to: '/about'
    }
  ];

  return (
    <Wrapper>
      <Logo />

      <Nav>
        {links.map((link, index) => (
          <NavItem key={index}>
            <Link className={linkCss} activeClassName="active" to={link.to}>
              {link.text}
            </Link>
          </NavItem>
        ))}

        <NavItem>
          <Telegram />
        </NavItem>

        <NavItem>
          <Mail />
        </NavItem>
      </Nav>
    </Wrapper>
  );
};

export default Header;
