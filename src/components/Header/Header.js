import React from 'react';

import {Link} from 'gatsby';

import Telegram from './assets/telegram.svg';
import Mail from './assets/mail.svg';

import {Wrapper, Logo, Nav, NavItem, NavText, linkCss} from './styled';

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
      <Link to="/">
        <Logo />
      </Link>

      <Nav>
        {links.map((link, index) => (
          <Link className={linkCss} activeClassName="active" to={link.to}>
            <NavItem key={index}>
              <NavText>{link.text}</NavText>
            </NavItem>
          </Link>
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
