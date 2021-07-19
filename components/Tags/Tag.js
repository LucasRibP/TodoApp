import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default Tag = ({ tag, active, fontSize = 16 }) => {
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
    <View
      style={[
        styles.componentContainer,
        {
          backgroundColor: tag.item.color,
          opacity: active ? 1 : 0.3,
        },
      ]}
    >
      <Text style={styles.nameText}>{tag.item.name}</Text>
    </View>
  );
};
