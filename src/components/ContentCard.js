import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

function ContentCard({ avatarUrl, coverUrl, title, shortDesc, onClick }) {
  return (
    <article
      className="ud-flex ud-flex-col ud-rounded-lg ud-w-64 ud-bg-white ud-shadow-md ud-group hover:ud-bg-danger ud-cursor-pointer ud-overflow-hidden"
      onClick={onClick}
    >
      <div className="ud-relative ud-h-40">
        <div className="ud-absolute ud-w-64 ud-h-40 ud-bg-slate-400/20"></div>
        {coverUrl ? (
          <img className="ud-w-64 ud-h-40" src={coverUrl} alt="image cover" />
        ) : (
          <div className="ud-w-64 ud-h-40 ud-bg-primary/20"></div>
        )}
        <div className="ud-absolute ud-right-2 ud-top-2">
          <Avatar avatarUrl={avatarUrl} />
        </div>
      </div>
      <div className="ud-flex ud-flex-col ud-space-y-1 ud-px-4 ud-py-3">
        <h2 className="ud-text-black ud-font-semibold group-hover:ud-text-primary">
          {title}
        </h2>
        <p className="ud-text-sm ud-text-black">{shortDesc}</p>
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
