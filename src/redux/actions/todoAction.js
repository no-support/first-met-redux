import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const { addTodo, removeTodo, removeAll } = createActions({
  ADD_TODO: (text) => ({ text }),
  REMOVE_TODO: () => ({}),
  REMOVE_ALL: () => ({}),
});

const todoReducer = handleActions(
  {
    [addTodo]: (state, action) => state.concat(action.payload.text),
    [removeTodo]: (state, action) => state.slice(0, -1),
    [removeAll]: (state, action) => [],
  },
  initialState
);

export default todoReducer;
