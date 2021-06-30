import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import styled from "styled-components";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <Root>
      <Empty />
      <AddTodo />
    </Root>
  );
}

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #7a7a7a;
  align-items: center;
  justify-content: space-between;
`;
