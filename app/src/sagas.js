import { all } from 'redux-saga/effects';
import { MentorSaga } from './containers';

export default function* AppSaga() {
  yield all([MentorSaga()]);
}
