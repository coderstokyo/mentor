import { all } from 'redux-saga/effects';
import { MentorSaga } from './app/containers';

export default function* AppSaga() {
  yield all([MentorSaga()]);
}
