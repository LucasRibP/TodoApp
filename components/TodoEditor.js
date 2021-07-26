import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import TagSelector from "./Tags/TagSelector";

export default TodoEditor = ({ todo, editTodo }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.componentContainer}>
      <View style={styles.textEditor}>
        <TextInput
          placeholder="New to-do's text..."
          onChangeText={setText}
          value={text}
        />
      </View>
      <View style={styles.tagSelectorContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
  },
});
