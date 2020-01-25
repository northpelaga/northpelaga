import React from 'react';

import {Wrapper, Item, Segment, Title, Subtitle, Date} from './styled';

const Timeline = () => {
  const items = [
    {
      date: 'May 2019 – present',
      occupation: 'Work',
      role: 'Role'
    },
    {
      date: 'May 2019 – present',
      occupation: 'Work',
      role: 'Role'
    },
    {
      date: 'May 2019 – present',
      occupation: 'Work',
      role: 'Role'
    }
  ];

  return (
    <Wrapper>
      {items.map((item, index) => (
        <Segment key={index}>
          <Item>
            <Title>{item.occupation}</Title>

            {item.role && <Subtitle>Designer</Subtitle>}

            <Date>{item.date}</Date>
          </Item>
        </Segment>
      ))}
    </Wrapper>
  );
};

export default Timeline;
