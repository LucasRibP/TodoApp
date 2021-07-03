import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";
import Todo from "./Todo";

export default TodoList = ({ todos, onPressTodo }) => {
  return (
    <ComponentContainer>
      <List
        data={todos}
        renderItem={(item) => {
          return (
            <Pressable onPress={() => onPressTodo(item.index)}>
              <Todo todo={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => {
          return item.key;
        }}
      />
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View`
  width: 400px;
  flex: 1;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const List = styled.FlatList``;
