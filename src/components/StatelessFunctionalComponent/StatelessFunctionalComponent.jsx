import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './StatelessFunctionalComponent.scss';

const StatelessFunctionalComponent = ({ title, content }) => {
  const buttonLabel = `${title} Button`;

  return (
    <div className="stateless-functional-component">
      <div className="header">{title}</div>
      <div className="content">{content}</div>
      <div className="button-container">
        <Button label={buttonLabel} />
      </div>
    </div>
  );
};

StatelessFunctionalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default StatelessFunctionalComponent;
