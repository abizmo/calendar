import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event }) => {
  const { title, user } = event;
  return (
    <div>
      <span>
        {title}
        {' '}
        -
        {' '}
        {user.name}
      </span>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Event;
