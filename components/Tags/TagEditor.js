import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import ColorSelector from "./ColorSelector";

export default TagEditor = ({ initialText, updateTagValues }) => {
  const [textValue, setTextValue] = useState(initialText);
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
      <TextInput
        style={styles.input}
        placeholder="Tag name..."
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
