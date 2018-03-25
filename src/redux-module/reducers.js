import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { loadPostsReducer, loadMediaByTagReducer } from '../components/instagram-widget/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  loadPostsReducer,
  loadMediaByTagReducer
});

export default rootReducer;
