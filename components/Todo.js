import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

export default Todo = ({ todo }) => {
  return (
    <ComponentContainer>
      <Text>{todo.text}</Text>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View``;
