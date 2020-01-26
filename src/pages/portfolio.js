import React from 'react';

import {graphql} from 'gatsby';

import {Portfolio} from '../components/Pages';

const PortfolioPage = props => {
  const {
    data: {
      allWorksJson: {edges}
    }
  } = props;

  const works = edges.map(({node}) => node);

  return <Portfolio works={works} />;
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
    }
  }
`;

export default PortfolioPage;
