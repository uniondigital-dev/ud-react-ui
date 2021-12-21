import React from 'react';
import PropTypes from 'prop-types';

// TODO: Add option to adjust the min height of container to full screen
function Container({ children }) {
  return <div className="container px-6 py-6 mx-auto">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
