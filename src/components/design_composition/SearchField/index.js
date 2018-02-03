// Modules
import React from 'react';

// Components
import H1 from '../../elements/H1';
import H4 from '../../elements/H4';
import Container from '../../elements/Container';
import Section from '../../elements/Section';
import Input from '../../elements/Input';
import Icon from '../../elements/Icon';
import Maps from '../../elements/GMaps';

const SearchField = () => {
  return (
    <Container className="go-flex set-just-between search-container">
      <Section className="search-section-left">
        <Section className="search-message">
          <H1 className="statement cut-default">Cerveja gelada em até 1h.</H1>
          <H4 className="statement-call cut-default">
            Pedir cerveja ficou tão facil quanto pedir pizza.
          </H4>
        </Section>
        <Section className="search-box go-flex set-just-between set-align-center">
          <Icon icon="place" className="place-icon" />
          <Input
            placeHolder="Qual o endereço de entrega?"
            className="search-input"
            id="search-input"
          />
        </Section>
      </Section>
      <Maps />
    </Container>
  );
};

export default SearchField;
