import React from 'react';

import SEO from '../components/seo';

import {About} from '../components/Pages';

const AboutPage = () => (
  <React.Fragment>
    <SEO title="About" />

    <About />
  </React.Fragment>
);

export default AboutPage;
