import React, { Component } from 'react';

import './button.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
};

export default Button;
