import React from 'react';

import {graphql} from 'gatsby';

import {Layout} from '../components';

import {Work} from './components';

const WorkTemplate = props => {
  const {
    data: {worksJson: work}
  } = props;

  return (
    <Layout>
      <Work work={work} />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    worksJson(id: {eq: $id}) {
      id
      title
      tag
      year
      preview {
        publicURL
      }
      full {
        publicURL
      }
    }
  }
`;

export default WorkTemplate;
