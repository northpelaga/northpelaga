import React from 'react';

import {graphql} from 'gatsby';

import {Layout} from '../components';

import {Work} from './components';

const WorkTemplate = props => {
  const {
    data: {worksJson: work}
  } = props;

  console.log(work);

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
      full {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 606) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

export default WorkTemplate;
