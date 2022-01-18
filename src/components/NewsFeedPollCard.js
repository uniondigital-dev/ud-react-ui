import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';
import NewsFeedHeader from './NewsFeedHeader';

function NewsFeedPollCard({
  title,
  subtitle,
  shared = false,
  avatarUrl,
  body,
  answers,
}) {
  return (
    <div className="ud-flex ud-flex-col ud-px-5 ud-py-7 ud-bg-white ud-rounded-lg ud-shadow-md">
      <NewsFeedHeader
        title={title}
        subtitle={subtitle}
        shared={shared ? 'poll' : undefined}
        avatarUrl={avatarUrl}
      />
      <div>
        <p className="ud-text-black ud-font-semibold ud-text-base ud-mt-4">
          {body}
        </p>
      </div>
      <div className="ud-flex ud-flex-col ud-mt-4 ud-space-y-3">
        {answers.map(({ variant, label, percentage }, index) => (
          <ProgressBar
            key={index}
            variant={variant}
            label={label}
            percentage={percentage}
          />
        ))}
      </div>
    </div>
  );
}

NewsFeedPollCard.propTypes = {
  title: PropTypes.string.isRequired,
  shared: PropTypes.bool,
  body: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default NewsFeedPollCard;
