import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default AddTodo = () => {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input placeholder="Add todo" onChangeText={onChangeText} />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          alert("button clicked");
        }}
      >
        <Text>Add</Text>
      </SubmitButton>
    </ComponentContainer>
  );
};

// Styles
const ComponentContainer = styled.View`
  flex-direction: row;
  margin: 0 20px;
  overflow: hidden;
  border-radius: 10px;
  background-color: white;
`;

const InputContainer = styled.View`
  flex-direction: row;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 350px;
  padding: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 10px;
`;
