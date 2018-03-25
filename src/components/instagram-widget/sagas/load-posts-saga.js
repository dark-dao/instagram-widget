import { take, takeEvery, put, call, fork, select } from 'redux-saga/effects';

import { ApiClient } from '../../../utils';
import CONSTANTS from '../constants';
import {
  loadPostsSuccess,
  loadPostsFail
} from '../actions';

export function* loadPostsSaga() {
  while(true) {
    try {
      const action = yield take([CONSTANTS.LOAD_POSTS_REQUEST]);
      if(action) {
        const { count, accessToken } = action;
        console.log(action);
        let selfPostsUrl = `/v1/users/self/media/recent/?access_token=${accessToken}`;
        if(count !== 0) {
          selfPostsUrl = `${selfPostsUrl}&count=${count}`;
        }
        const request = yield call(apiClient => new ApiClient().get(
          selfPostsUrl,
          null
        ));
        if(request.meta.code == 200) {
          yield put(loadPostsSuccess(request.data));
        } else {
          yield put(loadPostsFail(request.data));
        }
      }
    } catch(error) {
      yield put(loadPostsFail('Ошибка вызова api'));
      console.log(error);
    }
  }
};
