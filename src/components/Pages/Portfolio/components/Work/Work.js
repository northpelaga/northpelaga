import React from 'react';

import {GatsbyImage} from 'gatsby-plugin-image';

import {Link} from 'gatsby';

import {
  Wrapper,
  Date,
  Content,
  Year,
  Header,
  Title,
  Preview,
  Tag,
  TagWrapper,
} from './styled';

const Work = ({work}) => {
  const withDate = !!work.year;

  const fullUrl = `/portfolio/${work.id}`;

  return (
    <Wrapper>
      <Header withDate={withDate}>
        {withDate && (
          <Date>
            <Year>{work.year}</Year>
          </Date>
        )}

        <Title>
          <Link to={fullUrl}>{work.title}</Link>
        </Title>

        <TagWrapper>
          <Tag>{work.tag}</Tag>
        </TagWrapper>
      </Header>
      <Content>
        <Link to={fullUrl}>
          <GatsbyImage
            width={100}
            image={work.preview.childImageSharp.gatsbyImageData}
          />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Work;
