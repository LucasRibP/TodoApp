import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";
import TodoPopUp from "./TodoPopUp";

export default EditingPopUp = ({
  deleteTodo,
  editableTodo,
  setIsEditPopUpOpen,
}) => {
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [todoEditorOpen, setTodoEditorOpen] = useState(false);

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
  ) : todoEditorOpen ? (
    <TodoPopUp
      newMainView={<Text>I'm a placeholder</Text>}
      buttons={[
        {
          text: "CANCEL",
          color: "grey",
          onPress: () => setTodoEditorOpen(false),
        },

        { text: "CONFIRM", color: "hsl(205, 82%, 56%)", onPress: () => {} },
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
      <TouchableWithoutFeedback onPress={() => setIsEditPopUpOpen(false)}>
        <View style={styles.fullScreenTouchHandler} />
      </TouchableWithoutFeedback>
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
    overflow: "hidden",
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
