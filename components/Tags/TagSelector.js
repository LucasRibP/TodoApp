import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Text,
} from "react-native";
import TagEditor from "./TagEditor";

export default TagSelector = ({
  tags,
  setTags,
  selectedTags,
  setSelectedTags,
  isTagEditorOpen,
  setIsTagEditorOpen,
}) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [choosableTags, setChoosableTags] = useState(
    tags.slice(1, tags.length)
  );
  const [tagBeingEdited, setTagBeingEdited] = useState({
    name: "",
    color: "",
    id: -1,
  });

  useEffect(() => {
    setChoosableTags(
      tags
        .slice(1, tags.length)
        .filter((tag) => tag.name.includes(searchFilter))
    );
  }, [tags, searchFilter]);

  const onChangeSearchFilter = (text) => {
    setSearchFilter(text);
  };

  const toggleSelectionTag = (id) => {
    let newSelectedTags = [...selectedTags];
    if (newSelectedTags.includes(0)) {
      newSelectedTags = [];
    }
    if (newSelectedTags.includes(id)) {
      newSelectedTags = [...newSelectedTags.filter((item) => item != id)];
      if (newSelectedTags.length == 0) {
        newSelectedTags = [0];
      }
    } else {
      newSelectedTags = [...newSelectedTags, id];
    }
    setSelectedTags(newSelectedTags);
  };

  const createNewTag = () => {
    const tag_id = tags[tags.length - 1].id + 1;
    setTags([...tags, { name: searchFilter, color: "#aaa", id: tag_id }]);
    setSearchFilter("");
    setSelectedTags([...selectedTags, tag_id]);
  };

  const renderTag = (tag) => (
    <Pressable
      style={styles.tag}
      onPress={() => toggleSelectionTag(tag.item.id)}
      onLongPress={() => {
        setTagBeingEdited(tag.item);
        setIsTagEditorOpen(true);
      }}
    >
      <Tag
        tag={tag}
        active={selectedTags.includes(tag.item.id) ? true : false}
      />
    </Pressable>
  );

  const updateTagValues = (id) => (newParams) => {
    const newTags = [...tags];
    const index = newTags.findIndex((item) => item.id == id);
    newTags[index] = { ...newTags[index], ...newParams };
    setTags(newTags);
  };

  const tagList =
    choosableTags.length > 0 ? (
      <FlatList
        data={choosableTags}
        renderItem={renderTag}
        keyExtractor={(tag) => {
          return tag.id.toString();
        }}
      />
    ) : tags.length >= 1 ? (
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
    ) : (
      <View style={styles.noExistantTag}>
        <Text style={styles.noExistantTagText}>
          Use the text field above to create your first tag!
        </Text>
      </View>
    );

  return (
    <View style={styles.componentContainer}>
      {isTagEditorOpen ? (
        <View style={styles.tagEditorContainer}>
          <TagEditor
            initialName={tagBeingEdited.name}
            updateTagValues={updateTagValues(tagBeingEdited.id)}
          />
        </View>
      ) : (
        <></>
      )}
      <View style={styles.tagSelectorContainer}>
        {isTagEditorOpen ? (
          <Pressable
            style={styles.TagSelectorTouchDetector}
            onPress={() => setIsTagEditorOpen(false)}
          />
        ) : (
          <></>
        )}
        <TextInput
          style={styles.input}
          placeholder="Search for or create a tag..."
          onChangeText={onChangeSearchFilter}
          value={searchFilter}
        />
        {tagList}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {},
  tagSelectorContainer: {
    width: 200,
    height: 300,
    backgroundColor: "#fafafa",
    borderRadius: 5,
    padding: 8,
  },
  tagEditorContainer: { zIndex: 20, marginBottom: 5 },
  TagSelectorTouchDetector: {
    position: "absolute",
    zIndex: 15,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
  noExistantTag: { paddingHorizontal: 5 },
  noExistantTagText: { fontSize: 14 },
});
