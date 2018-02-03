import React from 'react';

const Section = ({ children, className, id }) => (
  <section id={id} className={className}>
    {children}
  </section>
);
export default Section;
