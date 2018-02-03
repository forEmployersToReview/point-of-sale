import React from 'react';

const Container = ({ children, className, id }) => (
  <div id={id} className={className}>
    {children}
  </div>
);

export default Container;
