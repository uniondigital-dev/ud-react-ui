import React from 'react';
import AvatarList from './AvatarList';
import Subtitle from './Subtitle';
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

NewsFeedFooter.PropTypes = {
  prefix: PropTypes.node.isRequired,
  suffix: PropTypes.node,
};

export default NewsFeedFooter;
