import React from 'react';

import {Wrapper, Info, Picture, Text} from './styled';

import Page from '../../Page/Page';

import photo from './assets/photo.jpg';

import {Timeline} from './components';

const About = () => {
  return (
    <Page>
      <Wrapper>
        <Info>
          <Picture>
            <img src={photo} />
          </Picture>

          <Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Info>

        <Timeline />
      </Wrapper>
    </Page>
  );
};

export default About;
