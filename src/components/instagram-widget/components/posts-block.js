import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import '../styles/media-block.css';
import {
  LoaderBar
} from '../../../atoms';
import { loadPosts } from '../actions';

const mapDispatchToProps = {
  loadPosts
};

const mapStateToProps = state => ({
  posts: state.loadPostsReducer.posts,
  isLoading: state.loadPostsReducer.isLoading
});

class Posts extends Component {
  component() {

  }
  componentDidMount() {
    const { accessToken, count } = this.props;
    this.props.loadPosts(accessToken, count);
  }
  render() {
    const { posts, isLoading } = this.props;
    return (
      <div className="media-block">
        {!isLoading ? (
          _.map(posts, (post, i) => {
            const imageUrl = post.images ? post.images.standard_resolution.url : '';
            const postUrl = post.link ? post.link : null;
            const style = {
              backgroundImage: 'url(' + imageUrl + ')'
            };
            return (
              <div key={i} className="image-block">
                <div style={style} className="image" onClick={() => {this.transitionToPost(postUrl)}}>
                  {postUrl ? <Link target="_blank" to={postUrl}/> : null}
                </div>
              </div>
            );
          })
        ) : (
          <LoaderBar />
        )}
      </div>
    );
  }
};

Posts.propTypes = {
  accessToken: PropTypes.string
};

Posts.getDefaultProps = {
  accessToken: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
