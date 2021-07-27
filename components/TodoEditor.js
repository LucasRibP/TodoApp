import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import TagButton from "./Tags/TagButton";
import TagSelector from "./Tags/TagSelector";

export default TodoEditor = ({ todo, setEditedTodo, tags, setTags }) => {
  const [text, setText] = useState(todo.text);
  const [isTagSelectorOpen, setIsTagSelectorOpen] = useState(false);
  const [isTagEditorOpen, setIsTagEditorOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(todo.tagIds);

  useEffect(() => {
    console.log(selectedTags);
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
        {isTagSelectorOpen ? (
          <>
            <View style={styles.tagSelectorContainer}>
              <TagSelector
                tags={tags}
                setTags={setTags}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                isTagEditorOpen={isTagEditorOpen}
                setIsTagEditorOpen={setIsTagEditorOpen}
              />
            </View>
          </>
        ) : (
          <></>
        )}
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
  tagSelectorContainer: {
    position: "absolute",
    bottom: "110%",
    right: 60,
    zIndex: 10,
  },
});
