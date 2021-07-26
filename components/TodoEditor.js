import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import TagButton from "./Tags/TagButton";
import TagSelector from "./Tags/TagSelector";

export default TodoEditor = ({ todo, editTodo, tags, setTags }) => {
  const [text, setText] = useState(todo.text);
  const [isTagSelectorOpen, setIsTagSelectorOpen] = useState(false);
  const [isTagEditorOpen, setIsTagEditorOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(todo.tagIds);

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
  },
  textEditor: {},
});
