import React, { useRef, useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default Todo = ({ todo, onPressTodo }) => {
  const [lineSizes, setLineSizes] = useState([]);

  const checkAnim = useRef(
    new Animated.Value(todo.item.checked ? 1 : 0)
  ).current;

  const todoScaleAnim = useRef(new Animated.Value(1)).current;

  const onPress = () => {
    if (!todo.item.checked) {
      Animated.timing(checkAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(checkAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    onPressTodo(todo.index);
  };

  const onLongPress = () => {
    Animated.timing(todoScaleAnim, {
      toValue: 0.97,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(todoScaleAnim).stop();
    Animated.timing(todoScaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const onTextLayout = (tl) => {
    const lineDims = tl.nativeEvent.lines.map((line) => {
      return { height: line.height, width: line.width };
    });

    const totalWidth = lineDims.reduce((a, b) => a + b.width, 0);
    setLineSizes(
      totalWidth == 0
        ? lineDims.map((line) => {
            return { ...line, animPerc: 1 };
          })
        : lineDims.map((line) => {
            return { ...line, animPerc: line.width / totalWidth };
          })
    );
  };

  const createStrikes = () => {
    let curAnimationTime = 0;

    return lineSizes.map((line, i) => {
      const strikeAnim = checkAnim.interpolate({
        inputRange: [0, curAnimationTime, curAnimationTime + line.animPerc, 1],
        outputRange: [0, 0, 1, 1],
      });
      curAnimationTime += line.animPerc;

      if (line.width != 0)
        return (
          <View
            key={i}
            style={{
              width: line.width,
              height: line.height,
            }}
          >
            <Animated.View
              style={{
                borderRadius: line.height,
                height: line.height,
                width: line.width + 10,
                backgroundColor: "black",
                transform: [
                  { scaleY: 0.1 },
                  {
                    translateX: strikeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-(line.width + 10) / 2, 0],
                    }),
                  },
                  { translateY: line.height },
                  { translateX: -5 },
                  { scaleX: strikeAnim },
                ],
              }}
            />
          </View>
        );
      else return <View key={i} />;
    });
  };

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={{
          ...styles.componentContainer,
          opacity: checkAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.5],
          }),
          transform: [{ scaleX: todoScaleAnim }, { scaleY: todoScaleAnim }],
        }}
      >
        <Checkbox checked={todo.item.checked} checkAnim={checkAnim} />
        <TextContainer>
          <View style={styles.strikesContainer}>{createStrikes()}</View>
          <Text onTextLayout={onTextLayout}>{todo.item.text}</Text>
        </TextContainer>
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
  strikesContainer: {
    position: "absolute",
    flex: 1,
  },
});

const TextContainer = styled.View`
  flex: 1;
  margin-left: 10px;
`;
