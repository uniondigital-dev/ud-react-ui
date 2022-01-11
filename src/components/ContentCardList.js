import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ContentCard from './ContentCard';
import Title from './Title';
import Button from './Button';

function ContentCardList({
  title,
  items,
  onItemClick,
  ctaText = 'View all',
  onCtaClick,
  hasPadding = false,
}) {
  return (
    <div
      className={classNames('ud-flex ud-flex-col ud-space-y-2', {
        'ud-container ud-mx-auto ud-pl-6 ': hasPadding,
      })}
    >
      <div className="ud-flex ud-items-center ud-justify-between">
        <div>
          <Title>{title}</Title>
        </div>
        <Button
          variant="link"
          className={classNames({
            'ud-mr-6': hasPadding,
          })}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
      <div className="ud-flex ud-space-x-2 ud-overflow-x-scroll">
        {items.map((item, index) => (
          <div key={index}>
            <ContentCard
              avatarUrl={item.avatarUrl}
              coverUrl={item.coverUrl}
              title={item.title}
              shortDesc={item.shortDesc}
              onClick={() => onItemClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ContentCardList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
  hasPadding: PropTypes.bool,
};

export default ContentCardList;
