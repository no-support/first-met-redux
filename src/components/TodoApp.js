import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../redux/slices/todoSlice";
import { fetchTodosRequested as fetchTodosRequestedActionCreator } from "../redux/actions/fetchTodosAction";
function TodoApp(props) {
  // const {
  //   // Redux state
  //   todoItems,
  //   // Redux dispatch
  //   addTodo,
  //   removeTodo,
  //   removeAll,
  //   triggerAsyncFunction,
  //   fetchTodo,
  // } = props;

  const todoItems = useSelector((state) => [
    ...state.todo,
    ...state.fetchTodos.data,
  ]);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = React.useState("");

  return (
    <div>
      <h3>오늘 할 일</h3>
      <ul>
        {todoItems.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>

      <input
        value={newTodo}
        onChange={(event) => {
          setNewTodo(event.target.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            // addTodo(newTodo);
            dispatch(addTodoActionCreator(newTodo));
            setNewTodo("");
          }}
        >
          할 일 추가
        </button>
        <button
          onClick={() => {
            //removeTodo
            dispatch(removeTodoActionCreator());
          }}
        >
          할 일 삭제
        </button>
        <button
          onClick={() => {
            // removeAll
            dispatch(removeAllActionCreator());
          }}
        >
          모두 삭제
        </button>
      </div>

      <button
        onClick={() => {
          //triggerAsyncFunction((dispatch, getState) => {
          dispatch((dispatch, getState) => {
            console.log("비동기 함수 실행", getState());

            new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            })
              .then(() => {
                console.log("비동기 함수 성공", getState());
              })
              .finally(() => {
                console.log("비동기 함수 종료", getState());
              });
          });
        }}
      >
        비동기 함수 테스트
      </button>

      <button
        onClick={() => {
          // fetchTodo
          dispatch(fetchTodosRequestedActionCreator());
        }}
      >
        서버에서 할 일 목록 받아오기
      </button>
    </div>
  );
}

export default TodoApp;
