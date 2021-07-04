import React from "react";
import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Checkbox from "./Checkbox";

export default Todo = ({ todo, checkAnimation }) => {
  return (
    <ComponentContainer checked={todo.item.checked}>
      <CheckboxContainer>
        <Checkbox checked={todo.item.checked} checkAnimation={checkAnimation} />
      </CheckboxContainer>
      <TodoText checked={todo.item.checked}>{todo.item.text}</TodoText>
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
  opacity: ${(props) => (props.checked ? "0.5" : "1")};
`;

const CheckboxContainer = styled.View``;

const TodoText = styled.Text`
  flex: 1;
  margin-left: 10px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
