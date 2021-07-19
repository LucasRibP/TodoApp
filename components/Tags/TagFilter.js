import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Tag from "./Tag";

export default TagFilter = ({ activeFilters, setActiveFilters, tags }) => {
  const onPressTodo = (id) => () => {
    if (activeFilters.includes(id)) {
      setActiveFilters(activeFilters.filter((cur_id) => cur_id != id));
    } else if (activeFilters[0] == 0) {
      setActiveFilters([id]);
    } else if (id == 0) {
      setActiveFilters([0]);
    } else {
      setActiveFilters([...activeFilters, id]);
    }
  };

  return (
    <View style={styles.componentContainer}>
      <FlatList
        horizontal
        data={tags}
        renderItem={(tag) => {
          return (
            <Pressable onPress={onPressTodo(tag.item.id)} style={styles.tag}>
              <Tag
                tag={tag}
                fontSize={18}
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
