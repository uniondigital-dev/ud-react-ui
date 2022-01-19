import React from 'react';
import PropTypes from 'prop-types';

function ChatContainer({ children }) {
  return <div className="ud-h-screen ud-overflow-scroll">{children}</div>;
}

ChatContainer.propTypes = {
  children: PropTypes.node,
};

export default ChatContainer;
