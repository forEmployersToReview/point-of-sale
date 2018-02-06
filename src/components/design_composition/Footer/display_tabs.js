// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayTabs = ({ tabs }) =>
  tabs.map((topic, index) => (
    <Link key={`${topic}${index}`} to="#" className="footer-tab-item">
      {topic}
    </Link>
  ));

DisplayTabs.propTypes = {
  tabs: T.arrayOf(T.string)
};

export default DisplayTabs;
