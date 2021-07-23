import React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export default EditingPopUp = ({
  deleteTodo,
  editableTodo,
  setIsEditPopUpOpen,
}) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableWithoutFeedback onPress={() => setIsEditPopUpOpen(false)}>
        <View style={styles.fullScreenTouchHandler} />
      </TouchableWithoutFeedback>
      <View style={styles.popUpBox}>
        <View style={styles.textContainer}>
          <Text style={styles.questionText}>
            Are you sure you want to delete the following to-do?
          </Text>
          <Text style={styles.todoText}>"{editableTodo.text}"</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.cancelButton}
            onPress={(e) => setIsEditPopUpOpen(false)}
          >
            <Text style={styles.buttonText}>CANCEL</Text>
          </Pressable>
          <Pressable
            style={styles.deleteButton}
            onPress={(e) => {
              deleteTodo(editableTodo);
              setIsEditPopUpOpen(false);
            }}
          >
            <Text style={styles.buttonText}>DELETE</Text>
          </Pressable>
        </View>
      </View>
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
  deleteButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  buttonText: {
    color: "#eee",
    fontSize: 20,
  },
});
