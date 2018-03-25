import { take, takeEvery, put, call, fork, select } from 'redux-saga/effects';

import { ApiClient } from '../../../utils';
import CONSTANTS from '../constants';
import {
  loadMediaByTagSuccess,
  loadMediaByTagFail
} from '../actions';

export function* loadMediaByTagSaga() {
  while(true) {
    try {
      const action = yield take([CONSTANTS.LOAD_MEDIA_BY_TAG_REQUEST]);
      if(action.accessToken) {
        const { count, accessToken, tagName } = action;
        let selfMediaUrl = `/v1/tags/${tagName}/media/recent?access_token=${accessToken}`;
        if(count !== 0) {
          selfMediaUrl = `${selfMediaUrl}&count=${count}`;
        }
        const request = yield call(apiClient => new ApiClient().get(
          selfMediaUrl,
          null
        ));
        if(request.meta.code == 200) {
          yield put(loadMediaByTagSuccess(request.data));
        } else {
          yield put(loadMediaByTagFail('Ошибка при загрузке данных'));
        }
      }
    } catch(error) {
      yield put(loadMediaByTagFail('Ошибка вызова api'));
      console.log(error);
    }
  }
};
