import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './loader.css';

class LoaderBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="loader-bar">
        <div className="spinner" />
      </div>
    );
  }
};

export default LoaderBar;
