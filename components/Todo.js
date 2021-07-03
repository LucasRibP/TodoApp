import React from "react";
import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Checkbox from "./Checkbox";

export default Todo = ({ todo }) => {
  return (
    <ComponentContainer>
      <CheckboxContainer>
        <Checkbox checked={todo.item.checked} />
      </CheckboxContainer>
      <TodoText>{todo.item.text}</TodoText>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  padding: 12px;
  align-items: center;
`;

const CheckboxContainer = styled.View``;

const TodoText = styled.Text`
  flex: 1;
  margin-left: 10px;
`;
