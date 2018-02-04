// Modules
import React from 'react';

// Components
import Section from '../../elements/Section';
import P from '../../elements/P';
import Container from '../../elements/Container';
import HorizontalDivider from '../../elements/HorizontalDivider';
import DisplayTabs from './display_tabs';
import DisplayIcons from './display_icons';

// Content
import { site_map, social_networks } from './content';

const Footer = () => {
  return (
    <Container className="footer-wrapper">
      <Section className="go-flex set-just-between">
        <Section className="footer-site-map-parent go-flex">
          {Object.keys(site_map).map((tabs, index) => {
            return (
              <Section classname="footer-site-map">
                <P className="footer-content-section">{tabs}</P>
                <Section className="footer-items-per-section go-flex set-vert">
                  <DisplayTabs key={`${tabs}${index}`} tabs={site_map[tabs]} />
                </Section>
              </Section>
            );
          })}
        </Section>
        <Section className="footer-social-networks go-flex set-just-between">
          <DisplayIcons networks={social_networks} />
        </Section>
      </Section>
      <HorizontalDivider />
      <Section>
        <P className="footer-company-warning">Beba com moderação</P>
        <P className="footer-trademark">
          © 2017 Zé Delivery - Todos os direitos reservados.
        </P>
      </Section>
    </Container>
  );
};

export default Footer;
