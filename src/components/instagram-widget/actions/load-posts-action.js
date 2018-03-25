import CONSTANTS from '../constants';

export const loadPosts = (accessToken, count) => {
  return {
    type: CONSTANTS.LOAD_POSTS_REQUEST,
    isLoading: true,
    accessToken,
    posts: [],
    count
  };
};

export const loadPostsSuccess = (posts) => ({
  type: CONSTANTS.LOAD_POSTS_REQUEST_SUCCESS,
  isLoading: false,
  posts
});

export const loadPostsFail = message => ({
  type: CONSTANTS.LOAD_POSTS_REQUEST_FAIL,
  isLoading: false,
  posts: [],
  message
});
