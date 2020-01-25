import React from 'react';

import {Wrapper, Greeting, GreetingItem, About} from './styled';

const Home = () => {
  return (
    <Wrapper>
      <Greeting>
        <GreetingItem col={2}>Hey.</GreetingItem>

        <GreetingItem col={3}>Privetik.</GreetingItem>

        <GreetingItem col={2}>Hola.</GreetingItem>
      </Greeting>

      <About>
        I’m Polina, a young Russian designer located in Novosibirsk.
        <br />
        <br />I specialize in lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </About>
    </Wrapper>
  );
};

export default Home;
