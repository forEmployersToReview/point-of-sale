// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

// Components
import Section from '../../elements/Section';
import Button from '../../elements/Button';
import Image from '../../elements/Image';

// Assets
const WhiteLogo = require('../../../assets/white_logo_horizontal.png');

const Header = ({ history }) => (
  <Section className="header-container go-flex set-align-center set-just-between">
    <Image
      className="header-logo"
      pictureURL={WhiteLogo}
      handleClick={() => history.push('/')}
    />
    <Button className="header-login-button">Entrar</Button>
  </Section>
);

Header.propTypes = {
  history: T.object
};

export default Header;
