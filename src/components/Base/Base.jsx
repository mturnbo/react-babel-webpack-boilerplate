import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Base.scss';

const Base = ({ title, content }) => {
  const buttonLabel = `${title} Button`;

  return (
    <div className="base">
      <div className="base-header">{title}</div>
      <div className="base-content">{content}</div>
      <div className="base-button">
        <Button label={buttonLabel} />
      </div>
    </div>
  );
};

Base.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Base;
