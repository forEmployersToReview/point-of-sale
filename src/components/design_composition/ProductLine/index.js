// Modules
import React from 'react';

// Components
import H1 from '../../elements/H1';
import H4 from '../../elements/H4';
import P from '../../elements/P';
import Container from '../../elements/Container';
import Section from '../../elements/Section';
import Image from '../../elements/Image';

// Assets
const water = require('../../../assets/water.jpg');
const soda = require('../../../assets/soda.jpg');
const energy_drink = require('../../../assets/energy_drink.jpg');
const snacks = require('../../../assets/snacks.jpg');

const products = [
  {
    photo: water,
    title: 'ÁGUA'
  },
  {
    photo: soda,
    title: 'REFRIGERANTES'
  },
  {
    photo: energy_drink,
    title: 'NÃO ALCÓLICOS'
  },
  {
    photo: snacks,
    title: 'OUTROS PRODUTOS'
  }
];

const ProductLine = () => {
  return (
    <Container className="line-walthrough go-flex set-just-between">
      <Section className="line-statement">
        <H1 className="line-statement-head">E NÃO É SÓ</H1>
        <H4 className="line-statement-toe">cerveja</H4>
      </Section>
      {products.map(({ photo, title }, index) => (
        <Section
          key={`${title}${index}`}
          className="line-section go-flex set-vert set-just-between set-align-center"
        >
          <P className="line-title">{title}</P>
          <Image pictureURL={photo} className="line-image" />
        </Section>
      ))}
    </Container>
  );
};

export default ProductLine;
