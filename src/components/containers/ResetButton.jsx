import React from 'react';
import PropTypes from 'prop-types';

const TryAgainButton = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    Try Again
  </button>
);

TryAgainButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TryAgainButton;
