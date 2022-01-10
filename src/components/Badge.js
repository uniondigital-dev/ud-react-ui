import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SIZE = {
  xs: 'ud-text-[10px] ud-px-2.5 ud-py-0.5',
  sm: 'ud-text-xs ud-px-2.5 ud-py-0.5 ',
};

const VARIANT = {
  primary: 'ud-bg-primary ud-text-white',
  info: 'ud-bg-info ud-text-white',
  danger: 'ud-bg-danger ud-text-white',
  warning: 'ud-bg-warning ud-text-black',
  success: 'ud-bg-success ud-text-white',
};

function Badge({
  variant = 'primary',
  size = 'sm',
  children,
  onClick,
  ...rest
}) {
  return (
    <span
      onClick={onClick}
      className={classNames('ud-rounded-full ', VARIANT[variant], SIZE[size])}
      {...rest}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  variant: PropTypes.oneOf(['primary', 'info', 'danger', 'warning', 'success']),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Badge;
