import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      clicks: 0
    }
  }

  incrementClickCount = () => {
    let numClicks = this.state.clicks + 1;
    this.setState({
      label: `Clicked ${numClicks.toString()} time(s)`,
      clicks: numClicks
    })
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
