import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Tag from "./Tag";

export default TagFilter = ({ tags }) => {
  return (
    <View style={styles.componentContainer}>
      <FlatList
        horizontal
        data={tags}
        renderItem={(item) => {
          return (
            <Pressable key={item.index}>
              <Tag tag={item} />
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
});
