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
    return (
      <div className="_main">
        {this.props.children}
        <InstagramWidget
          accessToken='your access token'
          showPosts={true}
          elementsCount={9}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
