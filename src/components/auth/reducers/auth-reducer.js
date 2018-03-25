import CONSTANTS from '../constants';

const initialState = {
  user: null,
  loginError: null
};

const authReducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case CONSTANTS.AUTH_REQUEST:
      return [
        ...state,
        {
          isLoading: action.isLoading,
          token: action.token
        }
      ]
    case CONSTANTS.AUTH_REQUEST_SUCCESS:
      return [
        ...state,
        {
          isLoading: action.isLoading,
          token: action.token
        }
      ]
      case CONSTANTS.AUTH_REQUEST_FAIL:
        return [
          ...state,
          {
            isLoading: action.isLoading,
            token: action.token,
            message: action.message
          }
        ]
    default:
      return state
  }
}

export default authReducer;
