import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

export default TagSelector = ({ tags }) => {
  return (
    <View style={styles.componentContainer}>
      <FlatList
        data={tags.slice(0, tags.length)}
        renderItem={(tag) => (
          <Tag tag={tag} keyExtractor={(tag) => tag.id.toString()} />
        )}
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
  },
});
