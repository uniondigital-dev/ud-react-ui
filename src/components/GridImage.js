import React from 'react';
import PropTypes from 'prop-types';

function GridImage({ imageUrl, title, onClick }) {
    return (
      <div
        className="ud-flex ud-flex-col ud-rounded-lg ud-w-44 ud-bg-transparent hover:ud-bg-purple-300 ud-cursor-pointer ud-overflow-hidden"
        onClick={onClick}>
        <img className="ud-aspect-square ud-w-full ud-rounded-lg" src={imageUrl} alt="image cover" />
        <h4 className="ud-px-1 ud-py-1 ud-text-black ud-font-semibold ud-truncate ud-text-left">
          {title}
        </h4>
      </div>
    );
  }
  
  GridImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };
  
  export default GridImage;