import React from 'react';
import PropTypes from 'prop-types';

function Subtitle({ children }) {
  return <h3 className="ud-text-sm ud-font-normal ud-text-gray-600">{children}</h3>;
}

Subtitle.propTypes = {
  children: PropTypes.oneOfType([propTypes.string]).isRequired,
};

export default Subtitle;
