// Modules
import React from 'react';

// Components
import H2 from '../../elements/H2';
import P from '../../elements/P';
import Container from '../../elements/Container';
import Section from '../../elements/Section';
import Image from '../../elements/Image';

// Assets
const location = require('../../../assets/location.svg');
const cart = require('../../../assets/cart.svg');
const happy_customer = require('../../../assets/happy_customer.svg');

const steps = [
  {
    photo: location,
    title: 'Onde está rolando o churrasco?',
    subtitle: 'Achamos cervejas geladinhas o mais proximo de você'
  },
  {
    photo: cart,
    title: 'Enche o seu carrinho',
    subtitle: 'Você escolhe cervejas, salgadinhos ou até gelo.'
  },
  {
    photo: happy_customer,
    title: 'Ai é só relaxar',
    subtitle: 'Chega gelada, em até uma 1H, na porta da sua casa.'
  }
];

const OrderWalkthrough = () => {
  return (
    <Container className="order-walthrough go-flex set-align-center set-just-between">
      {steps.map(({ photo, title, subtitle }, index) => (
        <Section key={`${title}${index}`} className="order-section">
          <Image pictureURL={photo} className="order-image" />
          <H2 className="order-title">{title}</H2>
          <P className="order-subtitle">{subtitle}</P>
        </Section>
      ))}
    </Container>
  );
};

export default OrderWalkthrough;
