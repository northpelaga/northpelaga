import React from 'react';
import {TransitionState} from 'gatsby-plugin-transition-link';
import {useSpring, animated} from 'react-spring';

const Container = ({toggle, noEnter, children}) => {
  const props = useSpring({opacity: toggle ? 1 : 0});

  return (
    <animated.div style={noEnter && toggle ? {} : props}>
      {children}
    </animated.div>
  );
};

const Page = ({children, noEnter}) => {
  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        console.log({mount});

        return (
          <Container toggle={mount} noEnter={noEnter}>
            {children}
          </Container>
        );
      }}
    </TransitionState>
  );
};

export default Page;
