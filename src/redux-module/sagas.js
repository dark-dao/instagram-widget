import { all } from 'redux-saga/effects'

import { loadPostsSaga, loadMediaByTagSaga } from '../components/instagram-widget/sagas';

export function* rootSaga() {
  yield all([
    loadPostsSaga(),
    loadMediaByTagSaga()
  ]);
};
