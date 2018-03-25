import CONSTANTS from '../constants';

const initialState = {
  count: 0,
  isLoading: false,
  accessToken: '',
  tag: '',
  media: [],
  message: ''
};

const loadMediaByTagReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONSTANTS.LOAD_MEDIA_BY_TAG_REQUEST:
      const stateObject = Object.assign(...state, action);
      return stateObject;
    case CONSTANTS.LOAD_MEDIA_BY_TAG_REQUEST_SUCCESS:
      return {
        isLoading: action.isLoading,
        media: action.media
      };
    case CONSTANTS.LOAD_MEDIA_BY_TAG_REQUEST_FAIL:
      return {
        isLoading: action.isLoading,
        media: action.media,
        message: action.message
      };
    default:
      return state
  }
}

export default loadMediaByTagReducer;
