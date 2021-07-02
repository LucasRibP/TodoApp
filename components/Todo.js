import React from "react";
import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Checkbox from "./Checkbox";

export default Todo = ({ todo }) => {
  return (
    <ComponentContainer>
      <CheckboxContainer>
        <Checkbox />
      </CheckboxContainer>
      <TodoText>{todo.item.text}</TodoText>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  border-width: 5px;
  border-color: white;
  overflow: hidden;
  padding: 10px;
  align-items: center;
`;

const CheckboxContainer = styled.View``;

const TodoText = styled.Text``;
