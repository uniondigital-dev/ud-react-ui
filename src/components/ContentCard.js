import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

function ContentCard({ avatarUrl, coverUrl, title, shortDesc, onClick }) {
  return (
    <article
      className="flex flex-col rounded-lg w-64 bg-white shadow-md group hover:bg-danger cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-40">
        <div className="absolute w-64 h-40 bg-slate-400/20"></div>
        {coverUrl ? (
          <img className="w-64 h-40" src={coverUrl} alt="image cover" />
        ) : (
          <div className=" w-64 h-40 bg-primary/20"></div>
        )}
        <div className="absolute right-2 top-2">
          <Avatar avatarUrl={avatarUrl} />
        </div>
      </div>
      <div className="flex flex-col space-y-1 px-4 py-3">
        <h2 className="text-black font-semibold group-hover:text-primary">
          {title}
        </h2>
        <p className="text-sm text-black">{shortDesc}</p>
      </div>
    </article>
  );
}

ContentCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ContentCard;
