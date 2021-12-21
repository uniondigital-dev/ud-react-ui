import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Avatar({ avatarUrl, hasBorder, ...rest }) {
  return (
    <img
      className={classNames('h-10 w-10 object-cover rounded-full ', {
        'border-2 border-white': hasBorder,
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
