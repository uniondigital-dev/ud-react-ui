import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Subtitle, NewsFeedHeader, NewsFeedFooter, AvatarList } from '..';
import { HeartIcon } from '@heroicons/react/solid';

function NewsFeedEventCard({
  title,
  subtitle,
  shared,
  avatarUrl,
  coverImage,
  dateNum,
  dateName,
  content,
  subContent,
  userLikes,
  likeCount,
  isLike,
}) {
  var [isLike, setIsLike] = useState(isLike);
  return (
    <div className="ud-flex ud-flex-col ud-bg-white ud-rounded-lg ud-shadow-md">
      <div className="ud-px-5 ud-py-5">
        <NewsFeedHeader
          title={title}
          subtitle={subtitle}
          shared={shared ? 'event' : undefined}
          avatarUrl={avatarUrl}
          suffixIcon={''}
        />
      </div>
      <img className="ud-aspect-video ud-object-cover" src={coverImage} />
      <div className="ud-w-20 ud-h-20 ud--mt-12 ud-ml-6 ud-bg-white ud-rounded-xl ud-shadow-xl">
        <div className="ud-flex ud-flex-col ud-items-center ud-justify-center">
          <p className="ud-text-black ud-text-3xl ud-m-3">{dateNum}</p>
          <p className="ud-text-base ud-font-semibold  ud-text-red-500 ud--m-4">
            {dateName}
          </p>
        </div>
      </div>
      <div className="ud-m-6">
        <p className="ud-text-black ud-font-medium">{content}</p>
        <div className="ud-mt-4">
          <Subtitle>{subContent}</Subtitle>
        </div>
      </div>
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
          suffix={
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
    </div>
  );
}

NewsFeedEventCard.propTypes = {
  coverImage: PropTypes.string.isRequired,
  dateNum: PropTypes.string.isRequired,
  dateName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subContent: PropTypes.string.isRequired,
  isLike: PropTypes.bool.isRequired,
};

export default NewsFeedEventCard;
