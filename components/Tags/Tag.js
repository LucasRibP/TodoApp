import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default Tag = ({ tag }) => {
  return (
    <View
      style={[
        styles.componentContainer,
        {
          backgroundColor: tag.item.color,
          opacity: tag.item.active ? 1 : 0.3,
          transform: [
            { scaleX: tag.item.active ? 1 : 0.9 },
            { scaleY: tag.item.active ? 1 : 0.9 },
          ],
        },
      ]}
    >
      <Text style={styles.nameText}>{tag.item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginHorizontal: 2,
    marginVertical: 5,
  },
  nameText: {
    fontSize: 16,
  },
});
