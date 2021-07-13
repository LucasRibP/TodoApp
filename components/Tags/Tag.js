import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default Tag = ({ tag }) => {
  console.log(tag);
  return (
    <View style={styles.componentContainer}>
      <Text>{tag.item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: { backgroundColor: "orangered" },
});
