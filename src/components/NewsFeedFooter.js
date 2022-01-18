import React from 'react';
import AvatarList from './AvatarList';
import Subtitle from './Subtitle';
import PropTypes from 'prop-types';

function NewsFeedFooter({ avatarUsers, avatarLabel, suffixIcon }) {
  return (
    <div className="ud-flex">
      <div className="ud-flex ud-w-90">
        <div className="">
          <AvatarList users={avatarUsers} label={avatarLabel} />
        </div>
      </div>
      <div className="ud-flex ud-flex-auto ud-w-10 ud-justify-end ud-items-center">
        <div>{suffixIcon}</div>
      </div>
    </div>
  );
}

NewsFeedFooter.PropTypes = {
  avatarUsers: PropTypes.func.isRequired,
  avatarLabel: PropTypes.string.isRequired,
  suffixIcon: PropTypes.node,
};

export default NewsFeedFooter;
