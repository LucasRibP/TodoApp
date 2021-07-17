import React, { useState } from "react";
import { View, StyleSheet, FlatList, Pressable, TextInput } from "react-native";

export default TagSelector = ({ tags, selectedTags, setSelectedTags }) => {
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
  // TODO: Fix Selector Closing
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
    <View style={styles.componentContainer}>
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
