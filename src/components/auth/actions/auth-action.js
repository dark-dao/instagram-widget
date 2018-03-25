import CONSTANTS from '../constants';

export const auth = token => {
  console.log(token);
  return {
    type: CONSTANTS.AUTH_REQUEST,
    isLoading: true,
    token
  };
};

export const authSuccess = token => ({
  type: CONSTANTS.AUTH_REQUEST_SUCCESS,
  isLoading: false,
  token
});

export const authFail = message => ({
  type: CONSTANTS.AUTH_REQUEST_FAIL,
  isLoading: false,
  token: '',
  message
});
