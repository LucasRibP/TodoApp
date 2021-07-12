import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";

export default DeletionPopUp = ({
  deleteTodo,
  deletableTodo,
  setIsDelPopUpOpen,
}) => {
  return (
    <View style={styles.componentContainer}>
      <View style={styles.popUpBox}>
        <View style={styles.textContainer}></View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.cancelButton}
            onPress={(e) => setIsDelPopUpOpen(false)}
          >
            <Text>CANCEL</Text>
          </Pressable>
          <Pressable
            style={styles.deleteButton}
            onPress={(e) => {
              deleteTodo(deletableTodo);
              setIsDelPopUpOpen(false);
            }}
          >
            <Text>DELETE</Text>
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
  textContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "orangered",
  },
  cancelButton: { flex: 1, backgroundColor: "grey" },
  deleteButton: { flex: 1, backgroundColor: "red" },
});
