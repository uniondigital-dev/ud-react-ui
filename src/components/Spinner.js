import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const VARIANT = {
  primary: 'ud-text-primary',
  white: 'ud-text-white',
};

const SIZE = {
  sm: 'ud-w-5 ud-h-5',
  base: 'ud-w-8 ud-h-8',
  large: 'ud-w-10 ud-h-10',
};

function Spinner({ variant = 'primary', size = 'base' }) {
  return (
    <svg
      className={classNames(
        'ud-animate-spin ud--ml-1 ud-mr-3',
        VARIANT[variant],
        SIZE[size]
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="ud-opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="ud-opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

Spinner.propTypes = {
  variant: PropTypes.oneOf(['primary', 'white']),
  size: PropTypes.oneOf(['sm', 'base', 'large']),
};

export default Spinner;
