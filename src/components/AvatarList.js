import React from 'react';

function AvatarList({ users, label, onClick }) {
  return (
    <div className="flex space-x-2 items-center" onClick={onClick}>
      <div className="flex -space-x-2">
        {users.slice(0, 3).map((user, index) => (
          <img
            key={index}
            className="h-10 w-10 object-cover rounded-full border-2 border-white"
            src={user.avatarUrl}
            alt={`avatar-${index}`}
          />
        ))}
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
}

export default AvatarList;
