import * as types from './actionTypes';

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  todo,
});

export const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  id,
});

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id,
});
