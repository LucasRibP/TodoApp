import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    let today = new Date();
    addTodo({
      text: value,
      key: today.toISOString(),
      checked: false,
    });
    setValue("");
  };

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.componentContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add todo"
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
      >
        <MaterialCommunityIcons name="label" color="#aaa" size={30} />
      </Pressable>
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "1%",
    marginBottom: "1.5%",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    fontSize: 20,
    backgroundColor: "white",
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
  tagContainerUnpressed: {},
  tag: {},
});
