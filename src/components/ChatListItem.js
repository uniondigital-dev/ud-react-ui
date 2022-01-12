import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from './Avatar';
import Badge from './Badge';

function ChatListItem({
  title,
  body,
  dateTimeText,
  badgeText,
  onClick,
  hasDivider = false,
}) {
  return (
    <div
      className={classNames('ud-flex ud-justify-between mb-2', {
        'ud-mb-3': hasDivider,
      })}
      onClick={onClick}
    >
      <div className="ud-flex ud-flex-1 ud-space-x-2 ud-overflow-hidden">
        <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
        <div
          className={classNames(
            'ud-flex ud-flex-1 ud-flex-col ud-justify-center',
            {
              'ud-border-b ud-border-b-slate-200': hasDivider,
            }
          )}
        >
          <p className="ud-text-sm ud-font-semibold ud-text-black">{title}</p>
          <p className="ud-text-xs ud-text-gray ud-truncate ud-w-60 md:ud-w-96 ud-mb-2">
            {body}
          </p>
        </div>
      </div>
      <div
        className={classNames(
          'ud-flex ud-flex-col ud-items-end ud-justify-center',
          {
            'ud-border-b ud-border-b-slate-200': hasDivider,
          }
        )}
      >
        <p className="ud-text-[10px] ud-text-gray">{dateTimeText}</p>
        {badgeText ? (
          <div className="ud-mt-0 ud-justify-self-end ud-mb-2">
            <Badge variant="info" size="xs">
              {badgeText}
            </Badge>
          </div>
        ) : (
          <div className="mt-2">&nbsp;</div>
        )}
      </div>
    </div>
  );
}

ChatListItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dateTimeText: PropTypes.string.isRequired,
  badgeText: PropTypes.string,
  onClick: PropTypes.func,
  hasDivider: PropTypes.bool,
};

export default ChatListItem;
