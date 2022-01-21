import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NewsFeedFooter, NewsFeedHeader, Button, AvatarList } from '..';
import { HeartIcon } from '@heroicons/react/solid';

function NewsFeedFundraisingCard({
  title,
  subtitle,
  shared,
  avatarUrl,
  image,
  content,
  userLikes,
  likeCount,
  onDonateClick,
}) {
  return (
    <div className="ud-flex ud-flex-col ud-rounded-lg ud-shadow-md">
      <div className="ud-px-5 ud-py-5">
        <NewsFeedHeader
          title={title}
          subtitle={subtitle}
          shared={shared ? 'fundraising' : undefined}
          avatarUrl={avatarUrl}
          suffixIcon={<HeartIcon className="ud-h-5 ud-w-5 ud-text-red-500" />}
        />
      </div>
      <img className="ud-aspect-video ud-object-cover" src={image} />
      <p className="ud-px-8 ud-py-7 ud-font-medium">{content}</p>
      <div className="ud-pb-7 ud-px-5 ">
        <NewsFeedFooter
          prefix={
            <AvatarList
              users={userLikes}
              label={
                likeCount === undefined ? '0 Likes' : likeCount + ' likes '
              }
            />
          }
          suffix={<Button onClick={onDonateClick}>DONATE</Button>}
        />
      </div>
    </div>
  );
}

NewsFeedFundraisingCard.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  userLikes: PropTypes.array.isRequired,
  likeCount: PropTypes.string.isRequired,
  onDonateClick: PropTypes.func.isRequired,
};

export default NewsFeedFundraisingCard;
