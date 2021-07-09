import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        const jsonValue = JSON.stringify(todos);
        console.log(todos);
        await AsyncStorage.setItem("@storage_Key", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };
    saveTodos();
  }, [todos]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@storage_Key");
        const value = jsonValue != null ? JSON.parse(jsonValue) : [];
      } catch (e) {
        console.log(e);
      }
    };
    loadTodos();
  }, []);

  const addTodo = (todo) => {
    let newTodos = [...todos, todo];
    newTodos.sort((a, b) => {
      if (a.checked == b.checked) {
        a.key > b.key ? 1 : -1;
      }
      return a.checked ? 1 : -1;
    });
    setTodos(newTodos);
  };

  const onPressTodo = (index) => {
    let newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    newTodos.sort((a, b) => {
      if (a.checked == b.checked) {
        a.key > b.key ? 1 : -1;
      }
      return a.checked ? 1 : -1;
    });
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
