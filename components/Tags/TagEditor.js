import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import ColorSelector from "./ColorSelector";

export default TagEditor = ({ tags, setTags, editedTagID }) => {
  const [textValue, setTextValue] = useState("");
  const onChangeText = (text) => {};
  const setTagColor = (color) => {};

  return (
    <View style={styles.componentContainer}>
      <TextInput
        style={styles.input}
        placeholder="Tag name..."
        onChangeText={onChangeText}
        value={textValue}
      />
      <View style={styles.colorSelectorContainer}>
        <ColorSelector setColor={setTagColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: 200,
    height: 100,
    backgroundColor: "#fafafa",
    borderRadius: 5,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 4,
  },
  input: { paddingLeft: 10, paddingVertical: 4 },
  colorSelectorContainer: { paddingBottom: 15 },
});
