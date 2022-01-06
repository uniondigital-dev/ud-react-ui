import React from 'react';
import Title from './Title';
import VSpace from './VSpace';
import PropTypes from 'prop-types';

function ArticleCard({ articleTitle, articleContent, onClick }) {
  return (
    <div className="ud-w-40 ud-shadow-md" onClick={onClick}>
      <div className="ud-bg-violet-200 hover:ud-bg-violet-300 ud-py-6 ud-px-4 ud-rounded-lg">
        <Title>{articleTitle}</Title>
        <div>
          <p> {articleContent}</p>
        </div>
      </div>
    </div>
  );
}

ArticleCard.PropTypes = {
  articleTitle: PropTypes.string.isRequired,
  articleContent: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ArticleCard.defaultProps = {
  articleTitle: 'Article',
  articleContent: 'Some details about the content',
  onClick: () => {
    console.log('Article Card Clicked');
  },
};

export default ArticleCard;
