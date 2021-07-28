import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import TagButton from "./Tags/TagButton";
import TagSelector from "./Tags/TagSelector";

export default TodoEditor = ({
  todo,
  setEditedTodo,
  selectedTags,
  isTagSelectorOpen,
  setIsTagSelectorOpen,
}) => {
  const [text, setText] = useState(todo.text);

  useEffect(() => {
    setEditedTodo({
      text: text,
      key: todo.key,
      checked: todo.checked,
      tagIds: selectedTags > 0 ? selectedTags : [0],
    });
  }, [text, selectedTags]);

  return (
    <View style={styles.componentContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Alter the following to-do...</Text>
      </View>
      <View style={styles.editorContainer}>
        <View style={styles.textEditor}>
          <TextInput
            placeholder="Type the new text..."
            onChangeText={setText}
            value={text}
          />
        </View>
        <View style={styles.tagButtonContainer}>
          <TagButton
            isTagSelectorOpen={isTagSelectorOpen}
            setIsTagSelectorOpen={setIsTagSelectorOpen}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 16,
  },
  editorContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#aaa",
  },
  textEditor: { flex: 1, paddingLeft: 10 },
});
