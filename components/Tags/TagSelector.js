import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Text,
} from "react-native";

export default TagSelector = ({
  tags,
  setTags,
  selectedTags,
  setSelectedTags,
}) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [choosableTags, setChoosableTags] = useState(
    tags.slice(1, tags.length)
  );

  useEffect(() => {
    setChoosableTags(
      tags
        .slice(1, tags.length)
        .filter((tag) => tag.name.includes(searchFilter))
    );
  }, [tags]);

  const onChangeSearchFilter = (text) => {
    setSearchFilter(text);
  };

  const toggleSelectionTag = (id) => {
    if (selectedTags.includes(id)) {
      setSelectedTags([...selectedTags.filter((item) => item != id)]);
    } else {
      setSelectedTags([...selectedTags, id]);
    }
  };

  const createNewTag = () => {
    setTags([
      ...tags,
      { name: searchFilter, color: "#aaa", id: tags[tags.length - 1].id + 1 },
    ]);
    setSearchFilter("");
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
      {choosableTags.length > 0 ? (
        <FlatList
          data={choosableTags}
          renderItem={renderTag}
          keyExtractor={(tag) => {
            return tag.id.toString();
          }}
        />
      ) : (
        <View style={styles.noTagFound}>
          <Pressable onPress={createNewTag} style={styles.createNewTag}>
            <View style={styles.newTagTextContainer}>
              <Text style={styles.newTagText}>Create</Text>
            </View>
            <View style={styles.newTagContainer}>
              <Tag
                tag={{ item: { name: searchFilter, color: "#aaa", id: -1 } }}
                active
              />
            </View>
          </Pressable>
        </View>
      )}
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
    marginBottom: 6,
  },
  noTagFound: {
    flex: 1,
  },
  createNewTag: {
    flexWrap: "nowrap",
    alignItems: "center",
    paddingLeft: 8,
    flexDirection: "row",
  },
  newTagText: { fontSize: 16 },
  newTagTextContainer: { marginRight: 6 },
  newTagContainer: {
    maxWidth: "70%",
  },
});
