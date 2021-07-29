import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import TagSelector from "./TagSelector";

export default TagSelectorPopUp = ({
  tags,
  setTags,
  selectedTags,
  setSelectedTags,
}) => {
  return (
    <View style={styles.componentContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Select the desired tags...</Text>
      </View>
      <View style={styles.tagSelectorContainer}>
        <TagSelector
          tags={tags}
          setTags={setTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          tagSelectorWidth={"100%"}
          tagSelectorHeight={"100%"}
          areTagsEditable={false}
        />
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
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 16,
  },
  tagSelectorContainer: {
    height: "75%",
    width: "100%",
  },
});
