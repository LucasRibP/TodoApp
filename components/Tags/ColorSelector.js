import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Pressable, StyleSheet } from "react-native";

// TODO: IMPLEMENT COLOR SELECTOR USING HSV COLOR SYSTEM
export default ColorSelector = () => {
  const [currentPosition, setCurrentPosition] = useState(0.5);
  return (
    <Pressable style={styles.componentContainer}>
      <View
        style={[
          styles.colorMarker,
          {
            left: `${currentPosition * 100 - 5}%`,
            backgroundColor: `hsl(${currentPosition * 360}, 100%, 75%)`,
          },
        ]}
      />
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={[
          "hsl(0, 100%, 75%)",
          "hsl(60, 100%, 75%)",
          "hsl(120, 100%, 75%)",
          "hsl(180, 100%, 75%)",
          "hsl(240, 100%, 75%)",
          "hsl(300, 100%, 75%)",
          "hsl(360, 100%, 75%)",
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: { width: "90%", height: "80%" },
  colorMarker: {
    position: "absolute",
    height: "100%",
    width: "10%",
    zIndex: 2,
  },
});
