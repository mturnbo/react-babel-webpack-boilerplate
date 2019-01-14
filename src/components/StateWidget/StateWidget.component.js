import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './StateWidget.component.scss';

class StateWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: 'data1',
      data2: 'data2',
      data3: 'data3'
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data1 !== nextState.data1 && this.state.data2 !== nextState.data2;
  }

  render() {
    const buttonLabel = `${this.props.title} Button`;

    return (
      <div className="state-widget">
        <div className="header">{this.props.title}</div>
        <div className="content">{this.props.content}</div>
        <div className="button-container">
          <Button label={buttonLabel} />
        </div>
      </div>
    );
  }
};

StateWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default StateWidget;
