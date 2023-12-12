import {
  put,
  delay,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import {
  fetchTodosRequested,
  fetchTodosSucceeded,
  fetchTodosFailed,
} from "../actions/fetchTodosAction";

function* fetchTodos(action) {
  try {
    // 실제로는 서버 API를 호출해서 데이터를 받아와야 함!
    const data = yield delay(
      3000,
      `서버로부터 받아온 할 일 ${new Date().toLocaleString()}}`
    );
    yield put(fetchTodosSucceeded(data));
  } catch (error) {
    yield put(fetchTodosFailed(error));
  }
}

function* fetchTodosSaga() {
  // yield takeEvery(fetchTodosRequested, fetchTodos);
  // yield takeLatest(fetchTodosRequested, fetchTodos);
  yield takeLeading(fetchTodosRequested, fetchTodos);
}

export default fetchTodosSaga;
