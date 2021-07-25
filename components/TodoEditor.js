import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import TagSelector from "./Tags/TagSelector";

export default TodoEditor = ({ todo, editTodo }) => {
  return (
    <View style={styles.componentContainer}>
      <View style={styles.textEditor}></View>
      <View style={styles.tagSelectorContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
  },
});
