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
          link
          year
          preview {
            childImageSharp {
              gatsbyImageData(width: 606, layout: FIXED)
            }
          }
        }
      }
    }
  }
`;

export default PortfolioPage;
