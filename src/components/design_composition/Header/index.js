// Modules
import React from 'react';

// Components
import Section from '../../elements/Section';
import Button from '../../elements/Button';
import Image from '../../elements/Image';

// Assets
const WhiteLogo = require('../../../assets/white_logo_horizontal.png');

const Header = () => {
  return (
    <Section className="header-container go-flex set-align-center set-just-between">
      <Image className="header-logo" pictureURL={WhiteLogo} />
      <Button className="header-login-button" text="Entrar" />
    </Section>
  );
};

export default Header;
