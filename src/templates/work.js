import React from 'react';

import {graphql} from 'gatsby';

import {Work} from './components';

import Page from '../components/Page/Page';

const WorkTemplate = (props) => {
  const {
    data: {worksJson: work},
  } = props;

  console.log(work);

  return (
    <Page noEnter>
      <Work work={work} />
    </Page>
  );
};

export const query = graphql`
  query ($id: String!) {
    worksJson(id: {eq: $id}) {
      id
      title
      tag
      link
      year
      full {
        childImageSharp {
          gatsbyImageData(width: 606, layout: FIXED)
        }
      }
    }
  }
`;

export default WorkTemplate;
