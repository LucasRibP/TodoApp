import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import TagSelector from "./Tags/TagSelector";

export default TodoEditor = ({ todo, editTodo }) => {
  const [text, setText] = useState(todo.text);
  return (
    <View style={styles.componentContainer}>
      <View style={styles.title}>
        <Text>Alter the following to-do...</Text>
      </View>
      <View style={styles.editorCoontainer}>
        <View style={styles.textEditor}>
          <TextInput
            placeholder="Type the new text..."
            onChangeText={setText}
            value={text}
          />
        </View>
        <View style={styles.tagSelectorContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
  },
  textEditor: {},
});
