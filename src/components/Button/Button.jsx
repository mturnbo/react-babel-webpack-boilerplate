import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>{label}</button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
