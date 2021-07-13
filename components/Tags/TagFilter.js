import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Tag from "./Tag";

export default TagFilter = ({ tags }) => {
  return (
    <View style={styles.componentContainer}>
      <FlatList
        data={tags}
        renderItem={(item) => {
          return (
            <Pressable>
              <Tag tag={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => {
          return item.index;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: { height: "10%" },
});
