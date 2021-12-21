import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function AvatarList({ users, label, onClick }) {
  return (
    <div className="flex space-x-2 items-center" onClick={onClick}>
      <div className="flex -space-x-2">
        {users.slice(0, 3).map((user, index) => (
          <Avatar key={index} avatarUrl={user.avatarUrl} hasBorder />
        ))}
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
}

AvatarList.propTypes = {
  users: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default AvatarList;
