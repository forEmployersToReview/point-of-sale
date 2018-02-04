// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Image = ({ className, pictureURL, alt }) => (
  <img className={className} src={pictureURL} alt={alt} />
);

Image.propTypes = {
  className: T.string,
  pictureURL: T.string,
  alt: T.string
};

export default Image;
