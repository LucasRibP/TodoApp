import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import styled from "styled-components";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const onPressTodo = (index) => {
    let newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <Root>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#7a7a7a" />
      </View>
      <Content>
        {todos.length === 0 ? (
          <Empty />
        ) : (
          <TodoList todos={todos} onPressTodo={onPressTodo} />
        )}
        <AddTodo addTodo={addTodo} />
      </Content>
    </Root>
  );
}

const Root = styled.View`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #7a7a7a;
  align-items: center;
  justify-content: space-between;
`;
