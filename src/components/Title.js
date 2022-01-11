import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

function Title({ children }) {
  return (
    <h1 className="ud-text-lg ud-font-bold ud-text-black !ud-p-0 !ud-m-0">
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([propTypes.string]).isRequired,
};

export default Title;
