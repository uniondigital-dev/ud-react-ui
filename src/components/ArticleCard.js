import React from 'react';
import Title from './Title';
import VSpace from './VSpace';
import PropTypes from 'prop-types';
import { curve } from '../assets/curve.png';

function ArticleCard({ articleTitle, articleContent, onClick }) {
  return (
    <div className="ud-relative ud-w-40 ud-shadow-md" onClick={onClick}>
      <div className="ud-bg-violet-200 hover:ud-bg-violet-300 ud-py-6 ud-px-4 ud-rounded-lg">
        <Title>{articleTitle}</Title>
        <div>
          <p> {articleContent}</p>
        </div>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  articleTitle: PropTypes.string.isRequired,
  articleContent: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ArticleCard.defaultProps = {
  articleTitle: 'Article',
  articleContent: 'Some details about the article',
  onClick: () => {
    console.log('Article Card Clicked');
  },
};

export default ArticleCard;
