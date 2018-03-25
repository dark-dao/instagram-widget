import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import '../styles/media-block.css';
import {
  LoaderBar
} from '../../../atoms';
import { loadMediaByTag } from '../actions';

const mapDispatchToProps = {
  loadMediaByTag
};

const mapStateToProps = state => ({
  media: state.loadMediaByTagReducer.media,
  isLoading: state.loadMediaByTagReducer.isLoading
});

class MediaByTag extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { accessToken, tagName, count } = this.props;
    this.props.loadMediaByTag(accessToken, tagName, count);
  }
  render() {
    const { isLoading, media } = this.props;
    return (
      <div className="media-block">
        {!isLoading ? (
          _.map(media, (item, i) => {
            console.log(item);
            const imageUrl = item.images ? item.images.standard_resolution.url : '';
            const postUrl = item.link ? item.link : null;
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

MediaByTag.propTypes = {
  accessToken: PropTypes.string,
  tagName: PropTypes.string
};

MediaByTag.getDefaultProps = {
  accessToken: '',
  tagName: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaByTag);
