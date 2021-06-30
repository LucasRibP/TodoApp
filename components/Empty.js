import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

export default Empty = () => {
  return (
    <ComponentContainer>
      <Text>Your to-do list is empty, add a new to-do!</Text>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
