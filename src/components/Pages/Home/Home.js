import React from 'react';

import {Wrapper, Greeting, GreetingItem, About} from './styled';

import Page from '../../Page/Page';

import Typist from 'react-typist';

const Home = () => {
  const [typed, setTyped] = React.useState(false);

  return (
    <Page>
      <Wrapper>
        <Typist
          onTypingDone={() => {
            setTimeout(() => {
              setTyped(true);
            }, 500);
          }}
        >
          <Greeting>
            <Typist.Delay ms={500} />
            <GreetingItem col={2}>Hey.</GreetingItem>
            <Typist.Delay ms={500} />
            <GreetingItem col={3}>Privetik.</GreetingItem>
            <Typist.Delay ms={500} />
            <GreetingItem col={2}>Hola.</GreetingItem>
          </Greeting>
        </Typist>

        <About style={{opacity: typed ? 1 : 0}}>
          I’m Polina, a young Russian designer located in Novosibirsk.
          <br />
          <br />I specialize in lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </About>
      </Wrapper>
    </Page>
  );
};

export default Home;
