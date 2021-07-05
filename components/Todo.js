import React, { useRef } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import { Animated, Pressable, StyleSheet } from "react-native";

export default Todo = ({ todo, onPressTodo }) => {
  const checkAnim = useRef(
    new Animated.Value(todo.item.checked ? 1 : 0)
  ).current;
  const onPress = () => {
    if (!todo.item.checked) {
      Animated.timing(checkAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(checkAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
    onPressTodo(todo.index);
  };

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={{
          ...styles.componentContainer,
          opacity: checkAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.5],
          }),
        }}
      >
        <CheckboxContainer>
          <Checkbox checked={todo.item.checked} checkAnim={checkAnim} />
        </CheckboxContainer>
        <TodoText checked={todo.item.checked}>{todo.item.text}</TodoText>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    padding: 12,
    alignItems: "center",
  },
});

const ComponentContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  padding: 12px;
  align-items: center;
  opacity: ${(props) => (props.checked ? "0.5" : "1")};
`;

const CheckboxContainer = styled.View``;

const TodoText = styled.Text`
  flex: 1;
  margin-left: 10px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
