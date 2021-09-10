import React from 'react';

import SEO from '../components/seo';

import {Home} from '../components/Pages';

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />

    <Home />
  </React.Fragment>
);

export default IndexPage;
