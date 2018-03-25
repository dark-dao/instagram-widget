import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import logo from './logo.svg';
import './App.css';
import {
  LoaderBar
} from './atoms';
import {
  InstagramWidget
} from './components';

const mapDispatchToProps = {

};

const mapStateToProps = state => ({

});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // showMediaByTag="#nofilter"
    return (
      <div className="_main">
        {this.props.children}
        <InstagramWidget
          accessToken='2966098041.234d42c.e76560ea8b70455d852aa92f4d09d28a'
          showPosts={false}
          elementsCount={0}
          showMediaByTag='tea'
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
