import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import ColorSelector from "./ColorSelector";

export default TagEditor = ({ initialName, updateTagValues }) => {
  const [textValue, setTextValue] = useState(initialName ? initialName : "");
  useEffect(() => {
    updateTagValues({ name: textValue });
  }, [textValue]);

  const onChangeText = (newTextValue) => {
    setTextValue(newTextValue);
  };
  const setTagColor = (color) => {
    updateTagValues({ color: color });
  };

  return (
    <View style={styles.componentContainer}>
      <Text style={styles.inputLabel}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="New tag name..."
        onChangeText={onChangeText}
        value={textValue}
      />
      <View style={styles.colorSelectorContainer}>
        <ColorSelector setColor={setTagColor} setColor={setTagColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: 200,
    height: 130,
    backgroundColor: "#fafafa",
    borderRadius: 5,
    padding: 8,
  },
  input: { paddingLeft: 10, paddingVertical: 4 },
  inputLabel: { marginTop: 2, marginLeft: 10 },
  colorSelectorContainer: { paddingBottom: 30 },
});
