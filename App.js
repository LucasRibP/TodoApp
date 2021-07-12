import React, { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import TodoList from "./components/TodoList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeletionPopUp from "./components/DeletionPopUp";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isDelPopUpOpen, setIsDelPopUpOpen] = useState(false);
  const [deleteTodoFunction, setDeleteTodoFunction] = useState(() => {});
  const [deletableTodo, setDeletableTodo] = useState({ name: "" });

  useEffect(() => {
    const saveTodos = async () => {
      try {
        const jsonValue = JSON.stringify(todos);
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

  const openDeletionPopUp = (todo) => {
    setDeleteTodoFunction(() => {
      setTodos([...todos.filter((item) => item.key != todo.key)]);
    });
    setDeletableTodo(todo);
    setIsDelPopUpOpen(true);
  };

  return (
    <View style={styles.root}>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#7a7a7a" />
      </View>
      <View style={styles.content}>
        {todos.length === 0 ? (
          <Empty />
        ) : (
          <TodoList
            todos={todos}
            onPressTodo={onPressTodo}
            openDeletionPopUp={openDeletionPopUp}
          />
        )}
        <AddTodo addTodo={addTodo} />
      </View>
      {console.log(setIsDelPopUpOpen)}
      {isDelPopUpOpen ? (
        <DeletionPopUp
          deleteTodo={deleteTodoFunction}
          deletedTodoText={deletableTodo}
          setIsDelPopUpOpen={setIsDelPopUpOpen}
        />
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#7a7a7a",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
