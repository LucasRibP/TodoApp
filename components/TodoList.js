import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Todo from "./Todo";

export default TodoList = ({ todos, onPressTodo }) => {
  return (
    <View style={styles.componentContainer}>
      <FlatList
        data={todos}
        renderItem={(item) => {
          return <Todo todo={item} onPressTodo={onPressTodo} />;
        }}
        keyExtractor={(item) => {
          return item.key;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: "98%",
    marginHorizontal: "1%",
    flex: 1,
    marginVertical: "2%",
  },
});
