import Avatar from './Avatar';
import PropTypes from 'prop-types';

function NewsFeedHeader({ title, subtitle, shared, avatarUrl, suffixIcon }) {
  return (
    <div className="ud-flex ud-rounded-lg">
      <div className="ud-flex ud-w-90 ud-flex-auto">
        <div className="ud-mr-4">
          <Avatar src={avatarUrl} />
        </div>
        <div className="">
          <div className="ud-text-base ud-font-medium">
            {shared === undefined ? (
              title
            ) : (
              <div className="ud-flex">
                {title} <p className="ud-text-slate-500 ud-mx-1"> shared </p>{' '}
                {shared}
              </div>
            )}
          </div>
          <p className="ud-text-sm ud-text-slate-500 ud--mt-1 ">{subtitle}</p>
        </div>
      </div>
      <div className="ud-flex ud-flex-auto ud-w-10 ud-justify-end ud-items-center">
        <div>{suffixIcon}</div>
      </div>
    </div>
  );
}

NewsFeedHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  suffixIcon: PropTypes.node,
  shared: PropTypes.string,
};

export default NewsFeedHeader;
