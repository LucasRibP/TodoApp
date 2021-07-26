import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import TagSelector from "./Tags/TagSelector";

export default AddTodo = ({
  addTodo,
  tags,
  isTagSelectorOpen,
  setIsTagSelectorOpen,
  setTags,
}) => {
  const [value, setValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [isTagEditorOpen, setIsTagEditorOpen] = useState(false);

  const { width, height } = Dimensions.get("window");

  const onSubmit = () => {
    let today = new Date();
    addTodo({
      text: value,
      key: today.toISOString(),
      checked: false,
      tagIds: selectedTags > 0 ? selectedTags : [0],
    });
    setValue("");
    setSelectedTags([]);
  };

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.componentContainer}>
      {isTagSelectorOpen ? (
        <>
          <Pressable
            style={[
              styles.fullScreenTouchDetector,
              { width: width, height: height },
            ]}
            onPress={() => {
              isTagEditorOpen
                ? setIsTagEditorOpen(false)
                : setIsTagSelectorOpen(false);
            }}
          />
          <View style={styles.tagSelectorContainer}>
            <TagSelector
              isTagEditorOpen={isTagEditorOpen}
              setIsTagEditorOpen={setIsTagEditorOpen}
              tags={tags}
              setTags={setTags}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          </View>
        </>
      ) : (
        <></>
      )}
      <View style={styles.mainBodyContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add to-do..."
            onChangeText={onChangeText}
            value={value}
          />
        </View>
        <Pressable
          style={(pressed) =>
            pressed
              ? [styles.tagContainer, styles.tagContainerPressed]
              : [styles.tagContainer, styles.tagContainerUnpressed]
          }
          onPress={() => setIsTagSelectorOpen(!isTagSelectorOpen)}
        >
          <MaterialCommunityIcons name="label" color="#aaa" size={30} />
        </Pressable>
        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {},
  tagSelectorContainer: {
    position: "absolute",
    bottom: "110%",
    right: 60,
    zIndex: 10,
  },
  fullScreenTouchDetector: {
    bottom: 0,
    left: 0,
    position: "absolute",
    zIndex: 5,
  },
  mainBodyContainer: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "1%",
    marginBottom: "1.5%",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#fafafa",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    fontSize: 20,
    padding: 10,
  },
  submitButton: {
    height: 48,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  tagContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 500,
    marginHorizontal: 5,
  },
  tagContainerPressed: {},
  tagContainerUnpressed: { backgroundColor: "grey" },
  tag: {},
});
