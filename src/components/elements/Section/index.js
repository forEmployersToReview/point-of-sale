// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Section = ({ children, className, id }) => (
  <section id={id} className={className}>
    {children}
  </section>
);

Section.propTypes = {
  children: T.node,
  className: T.string,
  id: T.number
};

export default Section;
