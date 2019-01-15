import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './Widget.scss';

const Widget = ({ title, content }) => {
  const buttonLabel = `${title} Button`;

  return (
    <div className="widget">
      <div className="header">{title}</div>
      <div className="content">{content}</div>
      <div className="button-container">
        <Button label={buttonLabel} />
      </div>
    </div>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Widget;
