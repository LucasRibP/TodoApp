import React from "react";
import styled from "styled-components";
import { Pressable } from "react-native";

export default Checkbox = ({
  checked = false,
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
  overflow: visible;
  justify-content: center;
`;

const CheckedSymbol = ({ size, color, active }) => {
  return (
    <CheckedSymbolContainer active={active}>
      <LineBack size={size} angle="45deg" color={color} />
      <LineFront size={size} angle="-45deg" color={color} />
    </CheckedSymbolContainer>
  );
};

const CheckedSymbolContainer = styled.View`
  align-items: center;
  opacity: ${(props) => (props.active ? "1" : "0")};
`;

const LineBack = styled.View`
  height: ${(props) => `${parseInt(props.size) * 1.5}px`};
  width: 1.5px;
  transform: rotate(${(props) => props.angle});
  background-color: ${(props) => props.color};
  position: relative;
`;

const LineFront = styled.View`
  height: ${(props) => `${parseInt(props.size) * 1.5}px`};
  width: 1.5px;
  transform: rotate(${(props) => props.angle});
  background-color: ${(props) => props.color};
  position: absolute;
`;
