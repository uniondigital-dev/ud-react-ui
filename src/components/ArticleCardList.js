import React from 'react';
import ArticleCard from './ArticleCard';
import Title from './Title';
import PropTypes from 'prop-types';

function ArticleCardList({ title, items, onItemClick }) {
  return (
    <div className="ud-flex ud-flex-col ud-space-y-2 ud-container ud-mx-auto">
      <div className="ud-flex ud-items-center ud-justify-between">
        <Title>{title}</Title>
      </div>
      <div className="ud-flex ud-space-x-2 ud-overflow-x-scroll">
        {items.map((item, index) => (
          <div key={index}>
            <ArticleCard
              articleTitle={item.articleTitle}
              articleContent={item.articleContent}
              onClick={() => onItemClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ArticleCardList.PropTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  onItemClick: PropTypes.func,
};

ArticleCardList.defaultProps = {
  title: 'Title Here',
  items: [
    <ArticleCard />,
    <ArticleCard />,
    <ArticleCard />,
    <ArticleCard />,
    <ArticleCard />,
  ],
  onItemClick: () => {
    alert('Article Card Linked');
  },
};

export default ArticleCardList;
