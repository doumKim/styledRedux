import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { addTodo } from '../actions/index';

const CircleButton = styled.button`
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  width: 80px;
  height: 80px;
  font-size: 60px;
  color: #fff;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #38d9a9;
  transition: 0.125s all ease-in;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(135deg);
    `}
`;

const InsertFormPostioner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const TodoInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  const dispatch = useDispatch();
  const nextId = useRef(3);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const onToggle = () => setOpen((prevState) => !prevState);
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmitNewTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        todoText: inputValue,
        done: false,
        id: nextId.current++,
      }),
    );
    setInputValue('');
  };
  return (
    <>
      {open && (
        <InsertFormPostioner>
          <InsertForm onSubmit={onSubmitNewTodo}>
            <TodoInput
              placeholder="할 일을 입력 후, Enter를 누르세요"
              autoFocus
              onChange={onChangeInput}
              value={inputValue}
              required
            />
          </InsertForm>
        </InsertFormPostioner>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
