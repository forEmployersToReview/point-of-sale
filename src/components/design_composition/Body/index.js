import React from 'react';
import SearchField from '../SearchField';
import OrderWalkthrough from '../OrderWalkthrough';
import ProductLine from '../ProductLine';
import Container from '../../elements/Container';

const LandingBody = () => {
  return (
    <Container className="body-container">
      <SearchField />
      <OrderWalkthrough />
      <ProductLine />
    </Container>
  );
};

export default LandingBody;
