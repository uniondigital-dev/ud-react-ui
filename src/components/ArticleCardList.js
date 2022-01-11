import React from 'react';
import ArticleCard from './ArticleCard';
import Title from './Title';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ArticleCardList({ title, items, onItemClick, hasPadding }) {
  return (
    <div
      className={classNames('ud-flex ud-flex-col ud-space-y-2', {
        'ud-container ud-mx-auto ud-pl-6 ': hasPadding,
      })}
    >
      <div>
        <Title>{title}</Title>
      </div>
      <div className="ud-flex ud-space-x-2 ud-overflow-x-scroll">
        {items.map((item, index) => (
          <div key={index}>
            <ArticleCard
              title={item.title}
              content={item.content}
              onClick={() => onItemClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ArticleCardList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
  hasPadding: PropTypes.bool,
};

export default ArticleCardList;
