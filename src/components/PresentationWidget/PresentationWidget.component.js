import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './PresentationWidget.component.scss';

const PresentationWidget = ({ title, content }) => {
  const buttonLabel = `${title} Button`;

  return (
    <div className="presentation-widget">
      <div className="header">{title}</div>
      <div className="content">{content}</div>
      <div className="button-container">
        <Button label={buttonLabel} />
      </div>
    </div>
  );
};

PresentationWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PresentationWidget;
