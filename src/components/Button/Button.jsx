import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>{label}</button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Click Me',
  onClick: () => alert('clicked')
};

// Button.prototype.defaultClickAction

export default Button;
