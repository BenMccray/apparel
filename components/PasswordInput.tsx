import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

type Props = {
  value: string;
  setValue: any;
};
export default function PasswordInput({ value, setValue }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={setValue}
      placeholder="***************"
      placeholderTextColor="gray"
      secureTextEntry={!passwordVisible} // Toggle secureTextEntry based on state
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 12,
  },
});
