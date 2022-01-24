import React from 'react';
import PropTypes from 'prop-types';

function NewsFeedFooter({ prefix, suffix }) {
  return (
    <div className="ud-flex">
      <div className="ud-flex ud-flex-1">
        <div className="">{prefix}</div>
      </div>
      <div className="ud-flex ud-flex-1 ud-justify-end ud-items-center">
        <div>{suffix}</div>
      </div>
    </div>
  );
}

NewsFeedFooter.propTypes = {
  prefix: PropTypes.node.isRequired,
  suffix: PropTypes.node,
};

export default NewsFeedFooter;
