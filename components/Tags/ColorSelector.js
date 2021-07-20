import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Pressable, StyleSheet } from "react-native";

// TODO: IMPLEMENT COLOR SELECTOR USING HSV COLOR SYSTEM
export default ColorSelector = () => {
  const [currentPosition, setCurrentPosition] = useState(0.5);
  const [componentWidth, setComponentWidth] = useState(10);

  const onPress = (evt) => {
    const percTapped = evt.nativeEvent.locationX / componentWidth;
    if (percTapped > 0.9) setCurrentPosition(0.9);
    else setCurrentPosition(percTapped);
  };
  return (
    <Pressable
      onPress={onPress}
      onLayout={(evt) => setComponentWidth(evt.nativeEvent.layout.width)}
      style={styles.componentContainer}
    >
      <View
        style={[
          styles.colorMarker,
          {
            left: `${currentPosition * 100}%`,
            backgroundColor: `hsl(${(currentPosition / 0.9) * 360}, 100%, 75%)`,
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
  gradient: {
    width: "90%",
    height: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  colorMarker: {
    position: "absolute",
    height: "100%",
    width: "10%",
    zIndex: 2,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
  },
});
