import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

export default TodoList = ({ todos }) => {
  return (
    <ComponentContainer>
      <List
        data={todos}
        renderItem={(item) => <Todo todo={item} />}
        keyExtractor={(item) => item.text}
      />
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View`
  flex-grow: 1;
  height: 200px;
`;

const List = styled.FlatList``;
