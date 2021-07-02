import React from "react";
import styled from "styled-components";
import { Pressable } from "react-native";

export default Checkbox = ({
  checked = false,
  size = "20px",
  borderColor = "black",
}) => {
  return (
    <CheckboxContainer>
      <Circle size={size} borderColor={borderColor} />
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.View``;

const Circle = styled.View`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: ${(props) => props.size};
  border-width: 2px;
  border-color: ${(props) => props.borderColor};
`;
