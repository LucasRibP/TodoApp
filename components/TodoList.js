import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

export default TodoList = ({ todos }) => {
  return (
    <ComponentContainer>
      <List
        data={todos}
        renderItem={(item) => <Todo todo={item} />}
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
