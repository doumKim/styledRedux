import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;
const TodoList = () => {
  return (
    <>
      <TodoListBlock>
        <TodoItem text={'프로젝트 생성하기'} done={true} />
        <TodoItem text={'컴포넌트 스타일링 하기'} done={true} />
        <TodoItem text={'리덕스 적용하기'} done={false} />
        <TodoItem text={'기능구현하기'} done={false} />
      </TodoListBlock>
    </>
  );
};

export default TodoList;
