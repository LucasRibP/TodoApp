import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default TagButton = ({ isTagSelectorOpen, setIsTagSelectorOpen }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});
