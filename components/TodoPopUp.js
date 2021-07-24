import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";

export default TodoPopUp = ({ popUpText, todo, buttons, newMainView }) => {
  buttonComponents = buttons.map((button, index) => (
    <Pressable
      key={index.toString()}
      style={[styles.button, { backgroundColor: button.color }]}
      onPress={button.onPress}
    >
      <Text style={styles.buttonText}>{button.text}</Text>
    </Pressable>
  ));

  const mainView = newMainView ? (
    newMainView
  ) : (
    <View style={styles.mainView}>
      <Text style={styles.questionText}>{popUpText}</Text>
      <Text style={styles.todoText}>"{todo.text}"</Text>
    </View>
  );

  return (
    <View style={styles.popUpBox}>
      <View style={styles.mainViewContainer}>{mainView}</View>
      <View style={styles.buttonsContainer}>{buttonComponents}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  popUpBox: {
    backgroundColor: "white",
    height: "40%",
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
    zIndex: 220,
  },
  mainViewContainer: {
    flex: 1,
  },
  mainView: {
    padding: "8%",
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
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  buttonText: {
    color: "#eee",
    fontSize: 20,
  },
});
