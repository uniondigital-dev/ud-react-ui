import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { BUTTON_VARIANT } from '../helpers/themeHelper';

const BUTTON_SIZE = {
  xs: 'text-xs px-3 py-2',
  sm: 'text-sm px-3 py-2',
  base: 'text-sm px-5 py-2.5',
  large: 'text-base font-medium px-5 py-3',
  extraLarge: 'text-base font-medium px-6 py-3.5',
};

function Button({
  variant = 'primary',
  size = 'base',
  children,
  className,
  block = false,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={classNames(
        'rounded-md font-sans',
        BUTTON_VARIANT[variant],
        BUTTON_SIZE[size],
        className,
        {
          'block w-full': block,
        }
      )}
    >
      {children}
    </button>
  );
}

Button.variant = BUTTON_VARIANT;

Button.size = BUTTON_SIZE;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'danger', 'success']),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'large', 'extraLarge']),
  children: PropTypes.node,
  className: PropTypes.string,
  block: PropTypes.bool,
};

export default Button;
