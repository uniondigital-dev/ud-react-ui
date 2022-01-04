import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function AvatarList({ users, label, onClick }) {
  return (
    <div className="ud-flex ud-space-x-2 ud-items-center" onClick={onClick}>
      <div className="ud-flex ud--space-x-2">
        {users.slice(0, 3).map((user, index) => (
          <Avatar key={index} avatarUrl={user.avatarUrl} hasBorder />
        ))}
      </div>
      <p className="ud-text-sm">{label}</p>
    </div>
  );
}

AvatarList.propTypes = {
  users: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default AvatarList;
