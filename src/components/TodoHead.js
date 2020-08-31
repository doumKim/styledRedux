import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868296;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  const todos = useSelector((state) => state.todolist.todos);
  const [leftTaskCount, setLeftTaskCount] = useState(0);
  const dateString = new Date().toLocaleDateString();
  const dayName = new Date().toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  useEffect(() => {
    setLeftTaskCount(todos.filter((todo) => todo.done === false).length);
  }, [todos]);
  return (
    <>
      <TodoHeadBlock>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        <div className="tasks-left">{`할 일 ${leftTaskCount}개 남음`}</div>
      </TodoHeadBlock>
    </>
  );
};

export default TodoHead;
