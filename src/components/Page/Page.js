import React from 'react';
import {TransitionState} from 'gatsby-plugin-transition-link';
import {useSpring, animated} from 'react-spring';

const Container = ({toggle, children}) => {
  const props = useSpring({opacity: toggle ? 1 : 0});

  return <animated.div style={props}>{children}</animated.div>;
};

const Page = ({children}) => {
  return (
    <TransitionState>
      {({mount, transitionStatus}) => {
        console.log({mount});

        return <Container toggle={mount}>{children}</Container>;
      }}
    </TransitionState>
  );
};

export default Page;
