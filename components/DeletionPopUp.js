import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export default DeletionPopUp = (
  deleteTodo,
  deletedTodoText,
  setIsDelPopUpOpen
) => {
  console.log(setIsDelPopUpOpen);
  return (
    <View style={styles.componentContainer}>
      <View style={styles.popUpBox}>
        <Button title={"Me mate"} onPress={() => setIsDelPopUpOpen(false)} />
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
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  popUpBox: {
    backgroundColor: "white",
    height: "40%",
    width: "80%",
    borderRadius: 10,
  },
});
