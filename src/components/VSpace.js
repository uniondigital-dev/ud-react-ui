import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SPACE_SIZE = {
  xs: 'mt-1',
  sm: 'mt-2',
  base: 'mt-3',
  large: 'mt-4',
  extraLarge: 'mt-5',
};

function VSpace({ size = 'extraLarge' }) {
  return <div className={classNames(SPACE_SIZE[size])}></div>;
}

VSpace.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'large', 'extraLarge']),
};

export default VSpace;
