import React from "react";
import { View, Animated, StyleSheet } from "react-native";

export default Checkbox = ({
  checkAnim,
  size = 20,
  borderColor = "black",
  checkedColor = "#ffcb7d",
}) => {
  const sizeStyles = {
    width: size,
    height: size,
    borderRadius: size,
  };

  return (
    <View>
      <View
        style={[
          styles.circle,
          sizeStyles,
          {
            borderColor: borderColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.circleBackground,
            sizeStyles,
            { backgroundColor: checkedColor, opacity: checkAnim },
          ]}
        />
        <CheckedSymbol color={borderColor} size={size} checkAnim={checkAnim} />
      </View>
    </View>
  );
};

const CheckedSymbol = ({ size, color, checkAnim }) => {
  return (
    <View style={styles.checkedSymbolContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  circleBackground: {
    position: "absolute",
    borderWidth: 1.5,
    borderColor: "transparent",
    left: -1.5,
  },
  checkedSymbolContainer: {
    alignItems: "center",
  },
  circle: {
    borderWidth: 1.5,
    overflow: "visible",
    justifyContent: "center",
  },
});
