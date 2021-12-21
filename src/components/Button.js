import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const BUTTON_SIZE = {
  xs: 'text-xs px-3 py-2',
  sm: 'text-sm px-3 py-2',
  base: 'text-sm px-5 py-2.5',
  large: 'text-base font-medium px-5 py-3',
  extraLarge: 'text-base font-medium px-6 py-3.5',
};

const BUTTON_VARIANT = {
  primary:
    'bg-primary text-white hover:bg-primary-dark disabled:bg-gray-200 disabled:text-gray-400',
  danger:
    'bg-red-100 text-red-800 hover:bg-red-200 disabled:bg-gray-200 disabled:text-gray-400',
  success:
    'bg-green-100 text-green-800 hover:bg-green-200 disabled:bg-gray-200 disabled:text-gray-400',
  link: 'text-primary underline hover:text-primary-dark disabled:bg-gray-200 disabled:text-gray-400 !p-0',
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
  variant: PropTypes.oneOf(['primary', 'danger', 'success', 'link']),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'large', 'extraLarge']),
  children: PropTypes.node,
  className: PropTypes.string,
  block: PropTypes.bool,
};

export default Button;
