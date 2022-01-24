import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import Title from './Title';
import Button from './Button';
import Badge from './Badge';

function NewsFeedMarketPlaceCard({
  title,
  avatarUrl,
  products,
  onItemClick,
  onSeeAll,
  onSell,
}) {
  return (
    <div className="ud-bg-white ud-rounded-lg ud-shadow-md ud-px-5 ud-py-7">
      <div className="ud-flex ud-items-center ud-space-x-3">
        <Avatar src={avatarUrl} />
        <div className="ud-flex-1">
          <Title>{title}</Title>
        </div>
        <Button variant="link" onClick={onSeeAll}>
          See all
        </Button>
      </div>
      <div className="ud-grid ud-grid-cols-2 ud-gap-2 ud-mt-4">
        {products.slice(0, 4).map((product, index) => (
          <div
            key={index}
            className="ud-relative ud-w-full ud-aspect-square"
            onClick={() => onItemClick(product)}
          >
            <div className="ud-absolute ud-inset-0 hover:ud-bg-black/30"></div>
            <div className="ud-absolute ud-bottom-3 ud-left-4">
              <Badge>₱ {product.price}</Badge>
            </div>
            <img
              src={product.img}
              alt="product"
              className="ud-w-full ud-h-full ud-object-center ud-object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="ud-mt-2">
        <Button size="large" variant="primary-light" onClick={onSell} block>
          Sell something
        </Button>
      </div>
    </div>
  );
}

NewsFeedMarketPlaceCard.propTypes = {};

export default NewsFeedMarketPlaceCard;
