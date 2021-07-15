import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Tag from "./Tag";

export default TagFilter = ({ tags }) => {
  const [activeFilters, setActiveFilters] = useState([0]);
  return (
    <View style={styles.componentContainer}>
      <FlatList
        horizontal
        data={tags}
        renderItem={(tag) => {
          return (
            <Pressable style={styles.tag}>
              <Tag
                tag={tag}
                active={activeFilters.includes(tag.item.id) ? true : false}
              />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    paddingHorizontal: 5,
  },
  tag: {
    marginHorizontal: 2,
    marginVertical: 5,
  },
});
