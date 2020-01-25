import React from 'react';

import {graphql} from 'gatsby';

import {Layout} from '../components';
import {Portfolio} from '../components/Pages';

const PortfolioPage = props => {
  const {
    data: {
      allWorksJson: {edges}
    }
  } = props;

  const works = edges.map(({node}) => node);

  return (
    <Layout>
      <Portfolio works={works} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allWorksJson {
      edges {
        node {
          id
          title
          tag
          year
          preview {
            publicURL
          }
        }
      }
    }
  }
`;

export default PortfolioPage;
