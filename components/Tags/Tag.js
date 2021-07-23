import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";

export default Tag = ({ tag, active, fontSize = 16 }) => {
  const fadeAnim = useRef(new Animated.Value(active ? 1 : 0.3)).current;

  useEffect(() => {
    if (active) {
      Animated.timing(fadeAnim, {
        toValue: 0.3,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [active]);

  const styles = StyleSheet.create({
    componentContainer: {
      paddingHorizontal: fontSize * 0.55,
      paddingVertical: fontSize / 3,
      borderRadius: fontSize / 2,
    },
    nameText: {
      fontSize: fontSize,
    },
  });

  return (
    <Animated.View
      style={[
        styles.componentContainer,
        {
          backgroundColor: tag.item.color,
          opacity: fadeAnim,
        },
      ]}
    >
      <Text style={styles.nameText}>{tag.item.name}</Text>
    </Animated.View>
  );
};
