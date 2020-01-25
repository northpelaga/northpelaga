import React from 'react';

import {Wrapper, Header, Title, Preview} from './styled';

const Work = ({work}) => {
  return (
    <Wrapper>
      <Header>
        <Title>{work.title}</Title>
      </Header>

      <Preview src={work.full.publicURL} />
    </Wrapper>
  );
};

export default Work;
