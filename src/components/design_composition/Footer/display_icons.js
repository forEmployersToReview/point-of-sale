// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

// Components
import Icon from '../../elements/Icon';

const DisplayIcons = ({ networks }) =>
  networks.map((social, index) => (
    <Icon key={`${social}${index}`} className={`${social} network`} />
  ));

DisplayIcons.propTypes = {
  network: T.arrayOf(T.string)
};

export default DisplayIcons;
