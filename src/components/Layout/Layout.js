import React from 'react';

import Header from '../Header/Header';
import {numberOfLines} from '../../constants';

import {Wrapper, BackgroundFill, Content, Grid, Line} from './styled';

const Layout = ({children}) => {
  return (
    <Wrapper>
      <BackgroundFill>
        <Grid>
          {Array(numberOfLines)
            .fill(0)
            .map((l, i) => (
              <Line key={i} />
            ))}
        </Grid>

        <Content>
          <Header />

          {children}
        </Content>
      </BackgroundFill>
    </Wrapper>
  );
};

export default Layout;
