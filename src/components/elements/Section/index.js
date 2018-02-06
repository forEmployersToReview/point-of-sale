// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Section = ({ children, className, id, onClick }) => (
  <section id={id} className={className} onClick={onClick}>
    {children}
  </section>
);

Section.propTypes = {
  children: T.node,
  className: T.string,
  id: T.number
};

export default Section;
