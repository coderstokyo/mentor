import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA } from './actions';
import { fetchDataSuccess, fetchDataFail } from './actions';
import request from '../../utils/request';

function* fetchData() {
  try {
    const requestURL = 'https://node-hnapi.herokuapp.com/news';
    const response = yield call(request, requestURL);
    yield put(fetchDataSuccess(response));
  } catch (err) {
    yield put(fetchDataFail(err));
  }
}

export default function* root() {
  yield takeLatest(FETCH_DATA, fetchData);
}
