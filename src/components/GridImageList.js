import React from 'react';
import PropTypes from 'prop-types';

import GridImage from './GridImage';
import Button from './Button';
import Title from './Title';
import VSpace from './VSpace';

function GridImageList({listTitle, items, listSliceCount, contextButtonTitle = 'See All', onItemClick, onContextButtonClick,}) {
    return (
      <div className="ud-flex ud-flex-col ud-space-x-2">
        <div className="ud-flex ud-ml-2 ud-items-center ud-justify-between">
          <Title>{listTitle}</Title>
          <Button
            variant="link"
            onClick={onContextButtonClick}
          >
            {contextButtonTitle}
          </Button>
        </div>
        <VSpace/>
        <div className="ud-grid ud-grid-cols-2 ud-gap-4">
          {items.slice(0,listSliceCount ?? items.length).map((item, index) => (
            <GridImage key={index} title={item.title} imageUrl={item.imageUrl} onClick={() => onItemClick(item)} hasBorder />
          ))}
        </div>
      </div>
    );
  }
  
  GridImageList.propTypes = {
    listTitle: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    listSliceCount: PropTypes.number,
    onItemClick: PropTypes.func,
    onContextButtonClick: PropTypes.func,
  };
  
  export default GridImageList;