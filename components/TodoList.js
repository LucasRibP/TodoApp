import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

export default TodoList = ({ todos }) => {
  return (
    <ComponentContainer>
      <List data={todos} renderItem={Todo} keyExtractor={(item) => item.text} />
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View``;

const List = styled.FlatList``;
