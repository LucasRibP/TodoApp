import React, { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import TodoList from "./components/TodoList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeletionPopUp from "./components/DeletionPopUp";
import TagFilter from "./components/Tags/TagFilter";
import ColorSelector from "./components/Tags/ColorSelector";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [tags, setTags] = useState([
    { name: "No Tag", color: "#aaa", id: 0 },
    { name: "Tag", color: "#ff4e4e", id: 1 },
  ]);
  const [isDelPopUpOpen, setIsDelPopUpOpen] = useState(false);
  const [deletableTodo, setDeletableTodo] = useState({});
  const [isTagSelectorOpen, setIsTagSelectorOpen] = useState(false);
  const [activeTagFilters, setActiveTagFilters] = useState([0]);
  const filteredTodos = todos.filter((todo) =>
    activeTagFilters.every((activeTagFilter) => {
      console.log(activeTagFilter, todo.tagIds);

      return todo.tagIds.includes(activeTagFilter);
    })
  );

  useEffect(() => {
    const saveTodos = async () => {
      try {
        const jsonValue = JSON.stringify(todos);
        await AsyncStorage.setItem("todos", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };
    saveTodos();
  }, [todos]);

  useEffect(() => {
    const saveTags = async () => {
      try {
        const jsonValue = JSON.stringify(tags);
        await AsyncStorage.setItem("tags", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };
    saveTags();
  }, [tags]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("todos");
        const value = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTodos(value);
      } catch (e) {
        console.log(e);
      }
    };
    loadTodos();
  }, []);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("tags");
        const value = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTags(value);
      } catch (e) {
        console.log(e);
      }
    };
    loadTags();
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
    setDeletableTodo(todo.item);
    setIsDelPopUpOpen(true);
  };

  const deleteTodo = (todo) => {
    setTodos([...todos.filter((item) => item.key !== todo.key)]);
  };

  return (
    <View style={styles.root}>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#7a7a7a" />
      </View>
      <TagFilter
        activeFilters={activeTagFilters}
        setActiveFilters={setActiveTagFilters}
        tags={tags}
      />
      <View style={styles.content}>
        {filteredTodos.length === 0 ? (
          <Empty />
        ) : (
          <TodoList
            todos={filteredTodos}
            tags={tags}
            onPressTodo={onPressTodo}
            openDeletionPopUp={openDeletionPopUp}
          />
        )}
        <AddTodo
          addTodo={addTodo}
          setTags={setTags}
          tags={tags}
          isTagSelectorOpen={isTagSelectorOpen}
          setIsTagSelectorOpen={setIsTagSelectorOpen}
        />
      </View>
      {isDelPopUpOpen ? (
        <DeletionPopUp
          deleteTodo={deleteTodo}
          deletableTodo={deletableTodo}
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
    backgroundColor: "#7a7a7a",
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
