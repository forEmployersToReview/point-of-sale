// Modules
import React from 'react';

// Components
import H2 from '../../elements/H2';
import P from '../../elements/P';
import Container from '../../elements/Container';
import Section from '../../elements/Section';
import Image from '../../elements/Image';

// Content
import { steps } from './content';

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
