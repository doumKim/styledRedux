import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 768px;
  position: relative;
  margin: 96px auto 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
