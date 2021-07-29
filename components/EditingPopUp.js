import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import TagSelectorPopUp from "./Tags/TagSelectorPopUp";
import TodoEditor from "./TodoEditor";
import TodoPopUp from "./TodoPopUp";

export default EditingPopUp = ({
  tags,
  setTags,
  deleteTodo,
  editTodo,
  editableTodo,
  setIsEditPopUpOpen,
}) => {
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [todoEditorOpen, setTodoEditorOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...editableTodo });
  const [isTagSelectorOpen, setIsTagSelectorOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(editableTodo.tagIds);
  console.log(selectedTags);
  useEffect(() => {
    setEditedTodo({
      ...editedTodo,
      tagIds: selectedTags,
    });
  }, [selectedTags]);

  const closeTopPopUp = () => {
    deleteConfirmationOpen
      ? setDeleteConfirmationOpen(false)
      : isTagSelectorOpen
      ? setIsTagSelectorOpen(false)
      : todoEditorOpen
      ? setTodoEditorOpen(false)
      : setIsEditPopUpOpen(false);
  };

  const onEditConfirmation = () => {
    editTodo(editedTodo);
    setIsEditPopUpOpen(false);
  };

  const curPopUp = deleteConfirmationOpen ? (
    <TodoPopUp
      popUpText={"Are you sure you want to delete the following to-do?"}
      todo={editableTodo}
      buttons={[
        {
          text: "CANCEL",
          color: "grey",
          onPress: () => setDeleteConfirmationOpen(false),
        },
        {
          text: "DELETE",
          color: "hsl(4, 82%, 56%)",
          onPress: () => {
            deleteTodo(editableTodo);
            setIsEditPopUpOpen(false);
          },
        },
      ]}
    />
  ) : isTagSelectorOpen ? (
    <TodoPopUp
      height={"50%"}
      newMainView={
        <TagSelectorPopUp
          tags={tags}
          setTags={setTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      }
      buttons={[
        {
          text: "CONFIRM",
          color: "hsl(205, 82%, 56%)",
          onPress: closeTopPopUp,
        },
      ]}
    />
  ) : todoEditorOpen ? (
    <TodoPopUp
      height={"30%"}
      newMainView={
        <TodoEditor
          todo={editableTodo}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          selectedTags={selectedTags}
          isTagSelectorOpen={isTagSelectorOpen}
          setIsTagSelectorOpen={setIsTagSelectorOpen}
        />
      }
      buttons={[
        {
          text: "CANCEL",
          color: "grey",
          onPress: () => setTodoEditorOpen(false),
        },

        {
          text: "CONFIRM",
          color: "hsl(205, 82%, 56%)",
          onPress: onEditConfirmation,
        },
      ]}
    />
  ) : (
    <TodoPopUp
      popUpText={"What do you want to do the following to-do?"}
      todo={editableTodo}
      buttons={[
        {
          text: "CANCEL",
          color: "grey",
          onPress: () => setIsEditPopUpOpen(false),
        },

        {
          text: "EDIT",
          color: "hsl(205, 82%, 56%)",
          onPress: () => {
            setTodoEditorOpen(true);
          },
        },
        {
          text: "DELETE",
          color: "hsl(4, 82%, 56%)",
          onPress: () => setDeleteConfirmationOpen(true),
        },
      ]}
    />
  );

  return (
    <View style={styles.componentContainer}>
      <Pressable
        style={styles.fullScreenTouchHandler}
        onPressIn={closeTopPopUp}
      />
      {curPopUp}
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.548)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 200,
  },
  fullScreenTouchHandler: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 210,
  },
  popUpBox: {
    backgroundColor: "white",
    height: "40%",
    width: "80%",
    borderRadius: 10,
    zIndex: 220,
  },
  textContainer: {
    padding: "8%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: { fontSize: 16 },
  todoText: { marginTop: "5%", fontSize: 16 },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    height: "20%",
  },
  cancelButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  editButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(205, 82%, 56%)",
  },
  deleteButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(4, 82%, 56%)",
  },
  buttonText: {
    color: "#eee",
    fontSize: 20,
  },
});
