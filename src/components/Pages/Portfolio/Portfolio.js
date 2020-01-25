import React from 'react';

import {Wrapper} from './styled';

import {Work} from './components';

import preview from './assets/preview.jpg';
import full from './assets/full.jpg';

const Portfolio = ({works}) => {
  return (
    <Wrapper>
      {works.map((work, index) => (
        <Work work={work} key={index} />
      ))}
    </Wrapper>
  );
};

export default Portfolio;
