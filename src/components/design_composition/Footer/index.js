// Modules
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Section from '../../elements/Section';
import Icon from '../../elements/Icon';
import P from '../../elements/P';
import Container from '../../elements/Container';
import HorizontalDivider from '../../elements/HorizontalDivider';

// Content
const site_map = {
  'Zé Delivery': [
    'Como funciona?',
    'Termos de Condiçōes e Politica de Privacidade',
    'Seja nosso parceiro'
  ],
  Contato: ['Fale com a gente']
};

const social_networks = [
  'fab fa-twitter',
  'fab fa-facebook-f',
  'fab fa-instagram'
];

const DisplayTabs = ({ tabs }) =>
  tabs.map((topic, index) => (
    <Link key={`${topic}${index}`} to={'#'} className="footer-tab-item">
      {topic}
    </Link>
  ));

const DisplayIcons = ({ networks }) =>
  networks.map((social, index) => (
    <i key={`${social}${index}`} className={`${social} network`} />
  ));

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
        <P className="footer-trademark">© 2017 Zé Delivery - Todos os direitos reservados.</P>
      </Section>
    </Container>
  );
};

export default Footer;
