import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

function Title({ children }) {
  return <h1 className="text-lg font-bold text-black">{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([propTypes.string]).isRequired,
};

export default Title;
