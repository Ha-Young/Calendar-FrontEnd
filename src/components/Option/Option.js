import React from 'react';
import PropTypes from 'prop-types';

export default function Option({ options }) {
  return (
    options.map(option => {
      return <option key={option} value={option}>{option}</option>;
    })
  );
}

Option.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
