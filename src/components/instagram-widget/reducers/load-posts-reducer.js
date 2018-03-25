import CONSTANTS from '../constants';

const initialState = {
  count: 0,
  isLoading: false,
  accessToken: '',
  posts: [],
  message: ''
};

const loadPostsReducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case CONSTANTS.LOAD_POSTS_REQUEST:
      const stateObject = Object.assign(...state, action);
      return stateObject;
    case CONSTANTS.LOAD_POSTS_REQUEST_SUCCESS:
      return {
        isLoading: action.isLoading,
        posts: action.posts
      };
    case CONSTANTS.LOAD_POSTS_REQUEST_FAIL:
      return {
        isLoading: action.isLoading,
        posts: action.posts,
        message: action.message
      };
    default:
      return state
  }
}

export default loadPostsReducer;
