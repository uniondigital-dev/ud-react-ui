import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Avatar({ avatarUrl, hasBorder, ...rest }) {
  return (
    <img
      {...rest}
      className={classNames('ud-h-10 ud-w-10 ud-object-cover ud-rounded-full', {
        'ud-border-2 ud-border-white': hasBorder,
      })}
      src={avatarUrl}
      alt={`avatar`}
    />
  );
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

export default Avatar;
