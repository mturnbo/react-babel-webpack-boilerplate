import React from 'react';
import './base.css';

export default class Base extends React.Component {
  render() {
    return (
      <div className="base">
        <div className="base-header">{this.props.title}</div>
        <div className="base-content">{this.props.content}</div>
      </div>);
  }
}
