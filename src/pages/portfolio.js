import React from 'react';

import {graphql} from 'gatsby';

import SEO from '../components/seo';

import {Portfolio} from '../components/Pages';

const PortfolioPage = (props) => {
  const {
    data: {
      allWorksJson: {edges},
    },
  } = props;

  const works = edges.map(({node}) => node);

  return (
    <React.Fragment>
      <SEO title="Portfolio" />

      <Portfolio works={works} />
    </React.Fragment>
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
