import React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';

import {Wrapper, Header, Title, Indent, Link, Preview} from './styled';

const Work = ({work}) => {
  const withLink = !!work.link;

  return (
    <Wrapper>
      <Header>
        <Title>{work.title}</Title>
        {withLink && (
          <Indent>
            <Link href={`https://${work.link}`} target="_blank">
              {work.link.includes('apps.apple.com') ? 'App Store' : work.link}
            </Link>
          </Indent>
        )}
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
