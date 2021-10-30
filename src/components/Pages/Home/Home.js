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
          Я Полина, UI/UX дизайнер из Новосибирска.
          <br />
          <br />С 2018 года работала в команде с разработчиками, где занималась
          созданием дизайна сайтов и мобильных приложений, дорабатывала и
          поддерживала макеты существующих систем в Sketch/Figma.
        </About>
      </Wrapper>
    </Page>
  );
};

export default Home;
