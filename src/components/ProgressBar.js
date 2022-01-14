import React from 'react';
import classNames from 'classnames';

const VARIANT = {
  success: 'ud-bg-[#CDF8C2]',
  danger: 'ud-bg-[#F8D1D5]',
};

function ProgressBar({
  variant = 'success',
  customColor,
  label,
  percentage = '0%',
}) {
  return (
    <div className="ud-relative ud-w-full ud-bg-gray-200 ud-rounded-full ud-h-10 ud-text-black ud-text-sm ud-font-semibold ud-overflow-hidden">
      <div className="ud-absolute ud-right-4 ud-top-2.5">{percentage}</div>
      <div className="ud-absolute ud-left-4 ud-top-2.5 ud-text-ellipsis ud-truncate ud-w-1/2">
        {label}
      </div>
      <div
        className={classNames(
          'ud-flex ud-items-center ud-h-10 ud-rounded-full',
          VARIANT[variant]
        )}
        style={{ width: percentage, backgroundColor: customColor }}
      ></div>
    </div>
  );
}

export default ProgressBar;
