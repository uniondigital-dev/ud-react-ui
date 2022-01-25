import React, { useState } from 'react';
import { NewsFeedFooter, NewsFeedHeader, AvatarList, Subtitle } from '..';
import { HeartIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import { useState } from 'react';

function NewsFeedCard({
  title,
  subtitle,
  isLike,
  avatarUrl,
  content,
  userLikes,
  likeCount,
  commentNum,
}) {
  var [isLike, setIsLike] = useState(isLike);
  return (
    <div className="ud-flex ud-flex-col ud-rounded-lg ud-shadow-md">
      <div className="ud-px-5 ud-py-5">
        <NewsFeedHeader
          title={title}
          subtitle={subtitle}
          avatarUrl={avatarUrl}
          suffixIcon={
            <div
              onClick={() =>
                setIsLike(isLike ? (isLike = false) : (isLike = true))
              }
            >
              <HeartIcon
                className={
                  isLike
                    ? 'ud-h-5 ud-w-5 ud-text-red-500'
                    : 'ud-h-5 ud-w-5 ud-text-gray-500'
                }
              />
            </div>
          }
        />
      </div>
      <p className="ud-text-black ud-px-5 ud-font-medium">{content}</p>
      <div className="ud-pb-7 ud-px-5 ud-py-5 ">
        <NewsFeedFooter
          prefix={
            <AvatarList
              users={userLikes}
              label={
                likeCount === undefined ? '0 Likes' : likeCount + ' likes '
              }
            />
          }
          suffix={
            <div className="ud-mt-3">
              <Subtitle>
                {commentNum === undefined
                  ? '0 comments'
                  : commentNum + ' comments'}
              </Subtitle>
            </div>
          }
        />
      </div>
    </div>
  );
}

NewsFeedCard.propTypes = {
  content: PropTypes.string.isRequired,
  isLike: PropTypes.bool.isRequired,
  userLikes: PropTypes.array.isRequired,
  likeCount: PropTypes.string.isRequired,
  commentNum: PropTypes.string.isRequired,
};

export default NewsFeedCard;
