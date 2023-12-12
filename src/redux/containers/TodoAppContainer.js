import { connect } from "react-redux";
// import {
//   addTodoActionCreator,
//   removeTodoActionCreator,
//   removeAllActionCreator,
// } from "../actions";
// import {
//   addTodoActionCreator,
//   removeTodoActionCreator,
//   removeAllActionCreator,
// } from "../ducks/todoDuck";
// import {
//   addTodo as addTodoActionCreator,
//   removeTodo as removeTodoActionCreator,
//   removeAll as removeAllActionCreator,
// } from "../actions/todoAction";
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../slices/todoSlice";
import addTodoThunkActionCreator from "../thunks/addTodoThunk";
import TodoApp from "../../components/TodoApp";
import { fetchTodosRequested as fetchTodosRequestedActionCreator } from "../actions/fetchTodosAction";

function mapStateToProps(state, ownProps) {
  return {
    // todoItems: state.todo,
    todoItems: [...state.todo, ...state.fetchTodos.data],
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      dispatch(addTodoActionCreator(text));
      // dispatch(addTodoThunkActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
    triggerAsyncFunction: (asyncFunction) => {
      dispatch(asyncFunction);
    },
    fetchTodo: () => {
      dispatch(fetchTodosRequestedActionCreator());
    },
  };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
