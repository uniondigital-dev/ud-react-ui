import React from 'react';
import PropTypes from 'prop-types';

function NewsFeedFundraisingCard({ image, content }) {
  return (
    <div className="ud-flex ud-flex-col ">
      <img className="ud-aspect-video ud-object-cover" src={image} />
      <p className="ud-m-8 ud-font-medium">{content}</p>
    </div>
  );
}

NewsFeedFundraisingCard.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NewsFeedFundraisingCard;
