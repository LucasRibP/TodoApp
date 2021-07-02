import React from "react";
import styled from "styled-components";
import { Pressable } from "react-native";

export default Checkbox = ({
  checked = true,
  size = "20px",
  borderColor = "black",
  checkedColor = "#ffcb7d",
}) => {
  return (
    <CheckboxContainer>
      <Circle
        size={size}
        borderColor={borderColor}
        checked={checked}
        checkedColor={checkedColor}
      >
        <CheckedSymbol color={borderColor} active={checked} size={size} />
      </Circle>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.View``;

const Circle = styled.View`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: ${(props) => props.size};
  border-width: 1.5px;
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) =>
    props.checked ? props.checkedColor : "transparent"};
`;

const CheckedSymbol = () => {
  return <CheckedSymbolContainer></CheckedSymbolContainer>;
};

const CheckedSymbolContainer = styled.View`
  position: absolute;
`;
