//TODO: refactor this file
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects';
import { setRandomColour, SET_RANDOM_COLOUR_DELAYED } from './actions';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* setRandomColourGeneratorLatest({ payload: { id, ms, sagaType } = {}} = {}){
  if(sagaType !== 'takeLatest') return;
  console.log("set random colour", id, ms);
  yield call(delay, ms);
  yield put(setRandomColour(id));
}
export function* setRandomColourGeneratorEvery({ payload: { id, ms, sagaType } = {}} = {}){
  if(sagaType !== 'takeEvery') return;
  console.log("set random colour", id, ms);
  yield call(delay, ms);
  yield put(setRandomColour(id));
}

export function* watchSetRandomColourLatest(){
  yield takeLatest(SET_RANDOM_COLOUR_DELAYED, setRandomColourGeneratorLatest)
}
export function* watchSetRandomColourEvery(){
  yield takeEvery(SET_RANDOM_COLOUR_DELAYED, setRandomColourGeneratorEvery)
}

export default function* rootSaga(){
  yield all([
    watchSetRandomColourLatest(),
    watchSetRandomColourEvery()
  ])
}