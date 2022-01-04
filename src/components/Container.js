import React from 'react';
import PropTypes from 'prop-types';

// TODO: Add option to adjust the min height of container to full screen
function Container({ children }) {
  return (
    <div className="ud-container ud-px-6 ud-py-6 ud-mx-auto">{children}</div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
