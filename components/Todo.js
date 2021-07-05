import React, { useRef } from "react";
import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Checkbox from "./Checkbox";
import { Animated, Pressable } from "react-native";

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
      <ComponentContainer checked={todo.item.checked}>
        <CheckboxContainer>
          <Checkbox checked={todo.item.checked} checkAnim={checkAnim} />
        </CheckboxContainer>
        <TodoText checked={todo.item.checked}>{todo.item.text}</TodoText>
      </ComponentContainer>
    </Pressable>
  );
};

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
