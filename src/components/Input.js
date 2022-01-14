import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = forwardRef(
  ({ label, error, className, iconLeft, ...rest }, ref) => {
    return (
      <>
        <label
          htmlFor={label}
          className="ud-block ud-capitalize ud-font-semibold ud-mb-1 ud-text-gray-600 ud-text-sm"
        >
          {label}
        </label>
        <div
          className={classNames('ud-flex ud-border ud-rounded-md', {
            'ud-border-danger focus:ud-ring-0': error,
          })}
        >
          <span className="ud-inline-flex ud-items-center ud-px-3 ud-text-sm ud-text-gray-900 ud-bg-[#F4F4F4] ud-rounded-l-md">
            {iconLeft === 'search' && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H24V24H0V0Z"
                  fill="white"
                  fillOpacity="0.01"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="6"
                  stroke="#7443E4"
                  strokeWidth="2"
                />
                <path
                  d="M19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L19.2929 20.7071ZM13.2929 14.7071L19.2929 20.7071L20.7071 19.2929L14.7071 13.2929L13.2929 14.7071Z"
                  fill="#7443E4"
                />
              </svg>
            )}
          </span>
          <input
            ref={ref}
            {...rest}
            className={classNames(
              'ud-flex-1 ud-appearance-none ud-bg-[#F4F4F4] ud-pr-4 ud-py-2 ud-rounded-r-md ud-text-lg placeholder:ud-text-gray-400 focus:ud-outline-none',
              className
            )}
          />
        </div>
      </>
    );
  }
);

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  iconLeft: PropTypes.string,
};

export default Input;
