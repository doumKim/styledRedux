import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;
const TodoList = () => {
  const todos = useSelector((state) => state.todolist.todos);
  const dispatch = useDispatch();
  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <>
      <TodoListBlock>
        {todos.length > 0 &&
          todos.map((todo) => {
            return (
              <TodoItem
                text={todo.todoText}
                key={todo.id}
                id={todo.id}
                done={todo.done}
                onRemove={onRemoveTodo}
                ontoggle={onToggleTodo}
              />
            );
          })}
      </TodoListBlock>
    </>
  );
};

export default TodoList;
