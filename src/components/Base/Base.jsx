import React from 'react';
import './base.css';

const Base = ({title, content}) => {
  return (
    <div className="base">
      <div className="base-header">{title}</div>
      <div className="base-content">{content}</div>
    </div>
  );
};

export default Base;
