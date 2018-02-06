// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Image = ({ className, pictureURL, alt, handleClick }) => (
  <img className={className} src={pictureURL} alt={alt} onClick={handleClick} />
);

Image.propTypes = {
  className: T.string,
  pictureURL: T.string,
  alt: T.string,
  handleClick: T.func
};

export default Image;
