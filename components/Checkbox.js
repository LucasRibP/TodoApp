import React from "react";
import styled from "styled-components";
import { Animated } from "react-native";

export default Checkbox = ({
  checkAnim,
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
        <CheckedSymbol color={borderColor} size={size} checkAnim={checkAnim} />
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

const CheckedSymbol = ({ size, color, checkAnim }) => {
  return (
    <CheckedSymbolContainer>
      <Animated.View
        style={{
          height: parseInt(size) * 1.5,
          width: 1.5,
          transform: [{ rotate: "45deg" }, { scaleY: checkAnim }],
          backgroundColor: color,
          position: "relative",
        }}
      />
      <Animated.View
        style={{
          height: parseInt(size) * 1.5,
          width: 1.5,
          transform: [{ rotate: "-45deg" }, { scaleY: checkAnim }],
          backgroundColor: color,
          position: "absolute",
        }}
      />
    </CheckedSymbolContainer>
  );
};

const CheckedSymbolContainer = styled.View`
  align-items: center;
`;
