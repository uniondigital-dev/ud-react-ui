import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';

function NewsFeedPollCard({ title, shared, body, answers }) {
  return (
    <div className="ud-flex ud-flex-col ud-px-5 ud-py-7 ud-bg-white ud-rounded-lg ud-shadow-md">
      {/* <NewsFeedHeader title="RAFI Poll" subtitle="Poll-so ng Masa" */}
      <div>
        <p className="ud-text-black ud-font-semibold ud-text-base">{body}</p>
      </div>
      <div className="ud-flex ud-flex-col ud-mt-6 ud-space-y-3">
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
  shared: PropTypes.string,
  body: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
};

export default NewsFeedPollCard;
