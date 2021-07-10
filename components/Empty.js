import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Empty = () => {
  return (
    <View style={styles.componentContainer}>
      <Text>Your to-do list is empty, add a new to-do!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
