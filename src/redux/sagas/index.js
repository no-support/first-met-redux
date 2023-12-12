import { all } from "redux-saga/effects";
import fetchTodosSaga from "./fetchTodosSaga";

function* rootSaga() {
  yield all([fetchTodosSaga()]);
}

export default rootSaga;
