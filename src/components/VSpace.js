import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SPACE_SIZE = {
  xs: 'ud-mt-1',
  sm: 'ud-mt-2',
  base: 'ud-mt-3',
  large: 'ud-mt-4',
  extraLarge: 'ud-mt-5',
};

function VSpace({ size = 'extraLarge' }) {
  return <div className={classNames(SPACE_SIZE[size])}></div>;
}

VSpace.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'large', 'extraLarge']),
};

export default VSpace;
