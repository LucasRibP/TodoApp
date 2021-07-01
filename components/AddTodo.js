import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    let today = new Date();
    addTodo({
      text: value,
      key: today.toISOString(),
    });
    setValue("");
  };

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input
          placeholder="Add todo"
          onChangeText={onChangeText}
          value={value}
        />
      </InputContainer>
      <SubmitButton onPress={onSubmit}>
        <Text>Add</Text>
      </SubmitButton>
    </ComponentContainer>
  );
};

// Styles
const ComponentContainer = styled.View`
  flex-direction: row;
  margin: 0 20px;
  margin-bottom: 10px;
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
