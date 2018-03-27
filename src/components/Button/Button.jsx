import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      label: this.props.label
    };
  }

  incrementClickCount = () => {
    let numClicks = this.state.clicks + 1;
    this.setState({
      clicks: numClicks,
      label: `Clicked ${numClicks.toString()} time(s)`
    });
  };

  render() {
    return (
      <button className="btn" onClick={this.props.onClick || this.incrementClickCount}>{this.state.label}</button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Click Me'
};

export default Button;
