import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FOCUS_RING } from '../helpers/themeHelper';

const Input = forwardRef(({ label, error, className, ...rest }, ref) => {
  return (
    <div className="ud-flex ud-flex-col ud-w-full">
      <label
        htmlFor={label}
        className="ud-capitalize ud-font-semibold ud-mb-1 ud-text-gray-600 ud-text-sm"
      >
        {label}
      </label>
      <input
        ref={ref}
        {...rest}
        className={classNames(
          'ud-appearance-none ud-bg-white ud-px-4 ud-py-2 ud-rounded-lg ud-border ud-text-lg placeholder:ud-text-gray-400',
          className,
          {
            'ud-border-danger focus:ud-ring-0': error,
          },
          FOCUS_RING
        )}
      />
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
};

// export const InputError = ({ children, className }) => {
//   return (
//     <span className={classNames('ud-text-sm ud-text-danger', className)}>
//       {children}
//     </span>
//   );
// };

// InputError.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

export default Input;
