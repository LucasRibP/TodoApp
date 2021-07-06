import React from "react";
import styled from "styled-components";
import { Animated, StyleSheet } from "react-native";

export default Checkbox = ({
  checkAnim,
  checked = false,
  size = "20px",
  borderColor = "black",
  checkedColor = "#ffcb7d",
}) => {
  const numSize = parseInt(size);
  return (
    <CheckboxContainer>
      <Circle size={size} borderColor={borderColor} checked={checked}>
        <Animated.View
          style={{
            ...styles.circleBackground,
            width: numSize,
            height: numSize,
            borderRadius: numSize,
            backgroundColor: checkedColor,
            opacity: checkAnim,
          }}
        />
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

const styles = StyleSheet.create({
  circleBackground: {
    position: "absolute",
    borderWidth: 1.5,
    borderColor: "transparent",
    left: -1.5,
  },
});

const CheckedSymbolContainer = styled.View`
  align-items: center;
`;
