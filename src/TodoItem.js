import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const RemoveButton = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const CheckIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.p`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  &:hover {
    ${RemoveButton} {
      opacity: 1;
    }
  }
`;

const TodoItem = ({ id, done, text }) => {
  return (
    <>
      <TodoItemBlock>
        <CheckIcon done={done}>{done && <MdDone />}</CheckIcon>
        <Text done={done}>{text}</Text>
        <RemoveButton>
          <MdDelete />
        </RemoveButton>
      </TodoItemBlock>
    </>
  );
};

export default TodoItem;
