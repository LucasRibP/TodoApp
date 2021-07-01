import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

export default Todo = ({ todo }) => {
  return (
    <ComponentContainer>
      <Text>{todo.item.text}</Text>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View`
  margin-bottom: 10px;
  border-width: 5px;
  border-color: white;
  overflow: hidden;
`;
