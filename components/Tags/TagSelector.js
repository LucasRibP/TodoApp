import React, { useState } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";

export default TagSelector = ({
  tags,
  selectedTags,
  setSelectedTags,
  tagSelectorIds,
  setTagSelectorIds,
}) => {
  const toggleSelectionTag = (id) => {
    if (selectedTags.includes(id)) {
      setSelectedTags([...selectedTags.filter((item) => item != id)]);
    } else {
      setSelectedTags([...selectedTags, id]);
    }
  };

  return (
    <View
      style={styles.componentContainer}
      ref={(component) => {
        if (component) {
          const ids = component._children[0]._children.map(
            (el) => el._nativeTag
          );
          if (
            ids.length > 0 &&
            (tagSelectorIds.length !== ids.length ||
              !tagSelectorIds.includes(ids[0]))
          ) {
            setTagSelectorIds(ids);
          }
        }
      }}
    >
      <FlatList
        data={tags.slice(0, tags.length)}
        renderItem={(tag) => (
          <Pressable
            style={styles.tag}
            onPress={() => toggleSelectionTag(tag.item.id)}
          >
            <Tag
              tag={tag}
              active={selectedTags.includes(tag.item.id) ? true : false}
            />
          </Pressable>
        )}
        keyExtractor={(tag) => {
          return tag.id.toString();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: 200,
    height: 300,
    backgroundColor: "#fafafa",
    borderRadius: 5,
    padding: 8,
  },
  tag: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "orangered",
    marginBottom: 6,
  },
});
