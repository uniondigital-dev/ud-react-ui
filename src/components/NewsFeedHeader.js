import React from 'react';
import Avatar from './Avatar';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

function NewsFeedHeader({ title, subtitle, src, options, suffixIcon }) {
  options = 'heart';

  if (options === 'heart') {
    options === 'heart';
  }

  return (
    <div className="ud-flex ud-shadow-md ud-rounded-lg">
      <div className="ud-m-2">
        <Avatar src={src} />
      </div>
      <div className="ud-m-2 ud-flex-auto ud-w-90">
        <h1 className="ud-text-base ud-font-medium">{title}</h1>
        <h3 className="ud-text-sm ud-text-slate-500 ud--mt-1">{subtitle}</h3>
      </div>
      <div className="ud-flex-auto ud-w-10 ">
        <div className="ud-justify-center ud-items-center">{suffixIcon}</div>
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
