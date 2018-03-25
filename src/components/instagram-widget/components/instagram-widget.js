import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  Button
} from '../../../atoms';
import Posts from './posts-block';
import MediaByTag from './media-block';

import '../styles/instagram-widget.css';
import { loadPosts } from '../actions';

const mapDispatchToProps = {

};

const mapStateToProps = state => ({

});

class InstagramWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  toggleSize() {
    this.setState({isOpen: !this.state.isOpen});
  }
  render() {
    const { accessToken, showMediaByTag, showPosts, elementsCount } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={isOpen ? "_instagram-widget open" : "_instagram-widget closed" }>
        <div className="header">
          <div className="text-block">
            <span>Instagram widget</span>
          </div>
          <div className="buttons-block">
            <Button onClick={() => {this.toggleSize()}}>{isOpen ? "Close" : "Open"}</Button>
          </div>
        </div>
        {_.size(accessToken) ? (
          <div className="content">
            {!_.size(showMediaByTag) && showPosts ? (
              <Posts accessToken={accessToken} count={elementsCount}/>
            ) : null}
            {_.size(showMediaByTag) && !showPosts ? (
              <MediaByTag accessToken={accessToken} tagName={showMediaByTag} count={elementsCount}/>
            ) : null}
          </div>
        ) : (
          <span>Не указан accessToken</span>
        )}
      </div>
    );
  }
};

InstagramWidget.propTypes = {
  accessToken: PropTypes.string.isRequired,
  elementsCount: PropTypes.number,
  showPosts: PropTypes.bool,
  showMediaByTag: PropTypes.string
};
InstagramWidget.getDefaultProps = {
  accessToken: '',
  elementsCount: 0,
  showPosts: false,
  showMediaByTag: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(InstagramWidget);
