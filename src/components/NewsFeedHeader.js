import React from 'react';
import Avatar from './Avatar';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

function NewsFeedHeader({ title, subtitle, src, suffixIcon }) {
  return (
    <div className="ud-flex ud-shadow-md ud-rounded-lg">
      <div className="ud-flex ud-w-90 ud-flex-auto">
        <div className="ud-m-4">
          <Avatar src={src} />
        </div>
        <div className="ud-my-4">
          <h1 className="ud-text-base ud-font-medium">{title}</h1>
          <h3 className="ud-text-sm ud-text-slate-500 ud--mt-1">{subtitle}</h3>
        </div>
      </div>
      <div className="ud-flex ud-flex-auto ud-w-10 ud-justify-end ud-items-center ud-m-4">
        <div>{suffixIcon}</div>
      </div>
    </div>
  );
}

NewsFeedHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  suffixIcon: PropTypes.node,
};

export default NewsFeedHeader;
