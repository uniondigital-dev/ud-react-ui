import React from 'react';
import Title from './Title';
import VSpace from './VSpace';
import PropTypes from 'prop-types';

function ArticleCard({ title, content, onClick }) {
  return (
    <div
      className="ud-relative ud-bg-violet-200 hover:ud-bg-violet-300 ud-w-40 ud-shadow-md ud-rounded-lg"
      onClick={onClick}
    >
      <div className="ud-py-6 ud-px-4 ">
        <Title>{title}</Title>
        <div className="ud-sticky ud-z-10 ud-left-4 ud-bottom-4 ud-mt-2 ">
          <p> {content}</p>
        </div>
        <div className="ud-absolute ud-right-0 ud-bottom-0 ud-z-0">
          <svg
            width="85"
            height="84"
            viewBox="0 0 85 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.5 165C128.063 165 165 128.063 165 82.5C165 36.9365 128.063 0 82.5 0C36.9365 0 0 36.9365 0 82.5C0 128.063 36.9365 165 82.5 165ZM82.76 120.665C103.695 120.665 120.665 103.694 120.665 82.7598C120.665 61.8252 103.695 44.8544 82.76 44.8544C61.8254 44.8544 44.8546 61.8252 44.8546 82.7598C44.8546 103.694 61.8254 120.665 82.76 120.665Z"
              fill="#c4b5fd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ArticleCard.defaultProps = {
  title: 'Article Title',
  content: 'Article Content',
};

export default ArticleCard;
