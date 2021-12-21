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
  ctaText,
  onCtaClick,
  hasPadding,
}) {
  return (
    <div
      className={classNames('flex flex-col space-y-2', {
        'container mx-auto pl-6 ': hasPadding,
      })}
    >
      <div className="flex items-center justify-between">
        <Title>{title}</Title>
        <Button
          variant="link"
          className={classNames({
            'mr-6': hasPadding,
          })}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
      <div className="flex space-x-2 overflow-x-scroll">
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
