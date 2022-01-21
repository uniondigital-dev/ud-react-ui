import React from 'react';
import PropTypes from 'prop-types';
import { NewsFeedFooter, NewsFeedHeader } from '..';

function NewsFeedFundraisingCard({
  title,
  subtitle,
  shared,
  avatarUrl,
  suffixIcon,
  image,
  content,
  prefix,
  suffix,
}) {
  return (
    <div className="ud-flex ud-flex-col ud-rounded-lg ud-shadow-md">
      <div className="ud-px-5 ud-py-5">
        <NewsFeedHeader
          title={title}
          subtitle={subtitle}
          shared={shared ? 'fundraising' : undefined}
          avatarUrl={avatarUrl}
          suffixIcon={suffixIcon}
        />
      </div>
      <img className="ud-aspect-video ud-object-cover" src={image} />
      <p className="ud-px-8 ud-py-7 ud-font-medium">{content}</p>
      <div className="ud-pb-7 ud-px-5 ">
        <NewsFeedFooter prefix={prefix} suffix={suffix} />
      </div>
    </div>
  );
}

NewsFeedFundraisingCard.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NewsFeedFundraisingCard;
