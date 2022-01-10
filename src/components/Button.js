import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const BUTTON_SIZE = {
  xs: 'ud-text-xs ud-px-3 ud-py-2 ',
  sm: 'ud-text-sm ud-px-3 ud-py-2',
  base: 'ud-text-sm ud-px-5 ud-py-2.5',
  large: 'ud-text-base ud-font-medium ud-px-5 ud-py-3',
  extraLarge: 'ud-text-base ud-font-medium ud-px-6 ud-py-3.5',
};

const BUTTON_VARIANT = {
  primary: 'ud-bg-primary ud-text-white hover:ud-bg-primary-dark',
  info: 'ud-bg-info ud-text-white hover:ud-bg-info-dark',
  danger: 'ud-bg-danger ud-text-white hover:ud-bg-danger-dark',
  warning: 'ud-bg-warning ud-text-black hover:ud-bg-warning-dark',
  success: 'ud-bg-success ud-text-white hover:ud-bg-success-dark',
  link: 'ud-text-primary ud-underline ud-bg-transparent hover:ud-text-primary-dark !ud-p-0',
};

function Button({
  variant = 'primary',
  size = 'base',
  children,
  className,
  block = false,
  disabled = false,
  ...rest
}) {
  return (
    <button
      {...rest}
      type="button"
      disabled={disabled}
      className={classNames(
        'ud-rounded-md ud-font-sans ud-border-0 ud-cursor-pointer disabled:ud-opacity-75 disabled:ud-cursor-not-allowed',
        BUTTON_VARIANT[variant],
        BUTTON_SIZE[size],
        className,
        {
          'ud-block ud-w-full': block,
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
  variant: PropTypes.oneOf([
    'primary',
    'info',
    'danger',
    'warning',
    'success',
    'link',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'large', 'extraLarge']),
  children: PropTypes.node,
  className: PropTypes.string,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
