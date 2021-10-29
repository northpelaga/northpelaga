import React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';

import {Wrapper, Header, Title, Preview} from './styled';

const Work = ({work}) => {
  return (
    <Wrapper>
      <Header>
        <Title>{work.title}</Title>
      </Header>

      <GatsbyImage
        style={{marginTop: '40px'}}
        width={100}
        image={work.full.childImageSharp.gatsbyImageData}
      />
    </Wrapper>
  );
};

export default Work;
