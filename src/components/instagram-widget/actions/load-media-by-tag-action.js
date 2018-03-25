import CONSTANTS from '../constants';

export const loadMediaByTag = (accessToken, tagName, count) => {
  console.log(accessToken, tagName, count);
  return {
    type: CONSTANTS.LOAD_MEDIA_BY_TAG_REQUEST,
    isLoading: true,
    accessToken,
    media: [],
    tagName,
    count
  };
};

export const loadMediaByTagSuccess = (media) => ({
  type: CONSTANTS.LOAD_MEDIA_BY_TAG_REQUEST_SUCCESS,
  isLoading: false,
  media
});

export const loadMediaByTagFail = message => ({
  type: CONSTANTS.LOAD_MEDIA_BY_TAG_REQUEST_FAIL,
  isLoading: false,
  media: [],
  message
});
