import React from 'react';

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
  TagWrapper
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
          <Preview src={work.preview.publicURL} />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Work;
