import React, { useState } from "react";
import { View, StyleSheet, FlatList, Pressable, TextInput } from "react-native";

export default TagSelector = ({
  tags,
  selectedTags,
  setSelectedTags,
  tagSelectorIds,
  setTagSelectorIds,
}) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [choosableTags, setChoosableTags] = useState(
    tags.slice(1, tags.length)
  );

  const onChangeSearchFilter = (text) => {
    setSearchFilter(text);
    setChoosableTags(
      tags.slice(1, tags.length).filter((tag) => tag.name.includes(text))
    );
  };

  const toggleSelectionTag = (id) => {
    if (selectedTags.includes(id)) {
      setSelectedTags([...selectedTags.filter((item) => item != id)]);
    } else {
      setSelectedTags([...selectedTags, id]);
    }
  };

  const renderTag = (tag) => (
    <Pressable
      style={styles.tag}
      onPress={() => toggleSelectionTag(tag.item.id)}
    >
      <Tag
        tag={tag}
        active={selectedTags.includes(tag.item.id) ? true : false}
      />
    </Pressable>
  );

  return (
    <View
      style={styles.componentContainer}
      ref={(component) => {
        // This gets the reference in order to close on outside touch
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
      <TextInput
        style={styles.input}
        placeholder="Search for a tag..."
        onChangeText={onChangeSearchFilter}
        value={searchFilter}
      />
      <FlatList
        data={choosableTags}
        renderItem={renderTag}
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
  input: { paddingBottom: 8, paddingHorizontal: 5 },
  tag: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "orangered",
    marginBottom: 6,
  },
});
