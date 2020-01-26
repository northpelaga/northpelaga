import React from 'react';

import {Wrapper} from './styled';

import Page from '../../Page/Page';

import {Work} from './components';

const Portfolio = ({works}) => {
  return (
    <Page>
      <Wrapper>
        {works.map((work, index) => (
          <Work work={work} key={index} />
        ))}
      </Wrapper>
    </Page>
  );
};

export default Portfolio;
