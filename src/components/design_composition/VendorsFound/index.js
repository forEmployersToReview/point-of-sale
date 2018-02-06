// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import Container from '../../elements/Container';
import P from '../../elements/P';
import H2 from '../../elements/H2';
import Section from '../../elements/Section';
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';

// Maps helper
import { new_marker, initiate_map } from '../../elements/GMaps/helper';

const VendorsFound = ({ pos, match }) => (
  <Container className="go-flex vendors-parent">
    {pos.map(({ tradingName, phone, pocWorkDay, address, id }, index) => {
      const { coordinates } = JSON.parse(address.coordinates);
      if (index === (pos.length -1)) {
        const initial_coords = JSON.parse(pos[0].address.coordinates).coordinates;
        initiate_map('map', initial_coords[1], initial_coords[0]);
      }
      const { address1, city, number } = address;
      return (
        <Section
          key={`${id}${index}`}
          className="vendor-unit go-flex set-vert set-just-between"
          onClick={() => new_marker(coordinates)}
        >
          <Section>
            <Section>
              <H2 className="vendor-title">{tradingName}</H2>
              <P className="vendor-address">{`${address1}, N.${number} - ${city}`}</P>
            </Section>
            <Section className="go-flex vendor-phone-wrapper">
              <Icon className="fas fa-phone phone-icon" />
              <P className="vendor-phone">{phone.phoneNumber}</P>
            </Section>
          </Section>
          <Link to={`/vendor/${id}`} className="vendor-products-link">
            <Button className="vendor-products">Ver Produtos</Button>
          </Link>
        </Section>
      );
    })}
  </Container>
);

VendorsFound.propTypes = {
  pos: T.array,
  match: T.object
};

export default VendorsFound;
